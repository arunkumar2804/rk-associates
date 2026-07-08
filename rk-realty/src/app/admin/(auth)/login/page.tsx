"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password");
        setLoading(false);
      } else {
        router.refresh();
        router.push("/admin");
      }
    } catch (err) {
      setError("An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md w-full space-y-8 p-10 bg-card rounded-2xl shadow-xl border border-border">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight">Admin Login</h2>
          <p className="mt-2 text-sm text-accent">Sign in to access your dashboard</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="p-3 bg-red-50 text-red-600 text-sm text-center rounded-lg border border-red-100">{error}</div>}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground">Email address</label>
              <input
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-border bg-background placeholder-accent text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm mt-1 transition-all"
                placeholder="admin@rkrealty.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground">Password</label>
              <input
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-border bg-background placeholder-accent text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm mt-1 transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-70 disabled:cursor-not-allowed items-center gap-2"
            >
              {loading && <Loader2 size={18} className="animate-spin" />}
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
