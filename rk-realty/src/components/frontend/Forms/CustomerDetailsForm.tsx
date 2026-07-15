"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import { customerFormSchema, CustomerFormValues } from "@/lib/validations/customerForm";
import { createPublicEnquiry } from "@/app/actions/enquiry";

declare global {
  interface Window {
    initSendOTP?: (configuration: any) => void;
    sendOtp?: (identifier: string, successCallback: (data: any) => void, failureCallback: (error: any) => void) => void;
    verifyOtp?: (otp: string, successCallback: (data: any) => void, failureCallback: (error: any) => void) => void;
    retryOtp?: (channel: string, successCallback: (data: any) => void, failureCallback: (error: any) => void) => void;
  }
}

// Animation Variants for Framer Motion
const slideVariants: Variants = {
  hidden: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
    },
  }),
};

export default function CustomerDetailsForm() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [otp, setOtp] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const [msg91Token, setMsg91Token] = useState<string | null>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCooldown > 0) {
      timer = setInterval(() => setResendCooldown(c => c - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  useEffect(() => {
    // Check if already loaded
    if (document.getElementById("msg91-script-loader")) return;

    const script = document.createElement("script");
    script.id = "msg91-script-loader";
    script.src = "https://verify.msg91.com/otp-provider.js";
    script.async = true;
    script.onload = () => {
      console.log("MSG91 Script Loaded.");
      if (typeof window.initSendOTP === "function") {
        window.initSendOTP({
          widgetId: "36676f726c51393736373938",
          tokenAuth: "548508TXHMu43Uv6a4e3a36P1",
          exposeMethods: true,
          success: () => {},
          failure: () => {},
        });
        console.log("MSG91 Initialized.");
      }
    };
    script.onerror = () => {
      console.error("Failed to load MSG91 script.");
    };
    document.body.appendChild(script);
  }, []);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors },
  } = useForm<CustomerFormValues>({
    resolver: zodResolver(customerFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      interestedProperty: "Buying a Property",
      message: "",
    },
    mode: "onTouched",
  });

  const handleResendOtp = () => {
    setSubmitError(null);
    if (typeof window.sendOtp === "function") {
      setResendCooldown(30);
      const phone = getValues("phone");
      const formattedPhone = phone.length === 10 ? `91${phone}` : phone;
      window.sendOtp(
        formattedPhone,
        (data: any) => console.log("Resend success:", data),
        (error: any) => setSubmitError(error.message || "Failed to resend OTP")
      );
    }
  };

  const nextStep = async () => {
    setSubmitError(null);
    if (step === 1) {
      const isValid = await trigger(["name", "phone", "email"]);
      if (isValid) {
        setIsSubmitting(true);
        const phone = getValues("phone");
        const formattedPhone = phone.length === 10 ? `91${phone}` : phone;

        if (typeof window.sendOtp === "function") {
          window.sendOtp(
            formattedPhone,
            (data: any) => {
              console.log("OTP Sent:", data);
              setIsSubmitting(false);
              setResendCooldown(30);
              setDirection(1);
              setStep(2);
            },
            (error: any) => {
              console.error("Send OTP Failure:", error);
              setIsSubmitting(false);
              setSubmitError(error.message || "Failed to send OTP. Please try again.");
            }
          );
        } else {
          setIsSubmitting(false);
          setSubmitError("OTP Service is not fully loaded. Please refresh and try again.");
        }
      }
    } else if (step === 2) {
      if (otp.length < 4) {
        setSubmitError("Please enter the complete OTP");
        return;
      }
      setIsSubmitting(true);
      if (typeof window.verifyOtp === "function") {
        window.verifyOtp(
          otp,
          (data: any) => {
            console.log("OTP Verified:", data);
            // data.message contains the JWT access token from MSG91
            setMsg91Token(data.message);
            setIsSubmitting(false);
            setDirection(1);
            setStep(3);
          },
          (error: any) => {
            console.error("Verify OTP Failure:", error);
            setIsSubmitting(false);
            setSubmitError(error.message || "Invalid OTP entered.");
          }
        );
      }
    }
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => prev - 1);
  };

  const onSubmit = async (data: CustomerFormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      // Pass the JWT token to the backend action for verification
      const result = await createPublicEnquiry({
        ...data,
        msg91Token: msg91Token || undefined,
      });

      if (result.error) {
        setSubmitError(result.error);
      } else {
        setDirection(1);
        setIsSuccess(true);
      }
    } catch (error) {
      console.error(error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex flex-col items-center justify-center text-center p-8 bg-white/50 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
          className="w-20 h-20 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6"
        >
          <CheckCircle size={40} />
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sora">
          Enquiry Submitted!
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
          Thank you for reaching out. One of our property consultants will contact
          you shortly to assist with your search.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false);
            setStep(1);
          }}
          className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <>
      <div className="relative overflow-hidden bg-white/80 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 shadow-2xl min-h-[480px] flex flex-col">
        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-100">
          <motion.div
            className="h-full bg-orange-500"
            initial={{ width: "33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center relative mt-6">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 font-sora mb-2">
              {step === 1 ? "Let's start with the basics" : step === 2 ? "Verify your mobile number" : "What are you looking for?"}
            </h2>
            <p className="text-gray-500 text-sm">
              {step === 1
                ? "We'll use this to get in touch with you."
                : step === 2
                ? `We've sent an OTP to +91 ${getValues("phone")}`
                : "Tell us about your requirements."}
            </p>
          </div>

          {submitError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 mb-6 bg-red-50 text-red-600 rounded-xl border border-red-100 text-sm flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              {submitError}
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="flex-1 relative">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700 block">
                      Full Name <span className="text-orange-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Enter your name"
                      className={`w-full p-4 rounded-2xl bg-gray-50 border transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none
                        ${errors.name ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-orange-400"}
                      `}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs font-medium pl-1 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 block">
                        Mobile Number <span className="text-orange-500">*</span>
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="9876543210"
                        className={`w-full p-4 rounded-2xl bg-gray-50 border transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none
                          ${errors.phone ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-orange-400"}
                        `}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs font-medium pl-1 mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-gray-700 block">
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className={`w-full p-4 rounded-2xl bg-gray-50 border transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-orange-500/10 outline-none
                          ${errors.email ? "border-red-300 focus:border-red-400" : "border-gray-200 focus:border-orange-400"}
                        `}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs font-medium pl-1 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 block text-center">
                      Enter Verification Code
                    </label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="Enter 4-digit OTP"
                      maxLength={4}
                      className="w-full text-center tracking-[1em] font-mono text-2xl p-4 rounded-2xl bg-gray-50 border border-gray-200 transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-400 outline-none"
                    />
                    <div className="text-center mt-4 h-6">
                      {resendCooldown > 0 ? (
                        <span className="text-sm text-gray-500">Resend OTP in {resendCooldown}s</span>
                      ) : (
                        <button
                          type="button"
                          onClick={handleResendOtp}
                          className="text-sm font-medium text-orange-600 hover:text-orange-700 hover:underline"
                        >
                          Resend OTP
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-5"
                >
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700 block">
                      I am looking for...
                    </label>
                    <select
                      {...register("interestedProperty")}
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none appearance-none cursor-pointer"
                    >
                      <option>Buying a Property</option>
                      <option>Renting a Property</option>
                      <option>Investment Advisory</option>
                      <option>Legal Assistance</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-gray-700 block">
                      Message
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your requirements (e.g. 3 BHK in East Bengaluru)"
                      className="w-full p-4 rounded-2xl bg-gray-50 border border-gray-200 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 outline-none resize-none"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-10 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex items-center gap-2 text-gray-500 font-medium hover:text-gray-900 transition-colors px-2"
                >
                  <ArrowLeft size={18} />
                  Back
                </button>
              ) : (
                <div /> // Spacer
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={isSubmitting}
                  className="group flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Please wait...
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group flex items-center gap-2 bg-orange-500 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-600 transition-all shadow-[0_8px_20px_rgba(240,100,0,0.3)] hover:shadow-[0_12px_24px_rgba(240,100,0,0.4)] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Enquiry
                      <CheckCircle size={18} className="group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
