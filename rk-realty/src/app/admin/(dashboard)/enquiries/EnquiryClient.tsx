"use client";

import { useState, useTransition } from "react";
import { Trash2 } from "lucide-react";
import { updateEnquiryStatus, deleteEnquiry } from "@/app/actions/enquiry";
import { Enquiry } from "@prisma/client";

export default function EnquiryClient({ initialEnquiries }: { initialEnquiries: Enquiry[] }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const handleStatusChange = (id: string, newStatus: string) => {
    setError(null);
    startTransition(async () => {
      const result = await updateEnquiryStatus(id, newStatus);
      if (result.error) setError(result.error);
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry?")) return;

    setError(null);
    startTransition(async () => {
      const result = await deleteEnquiry(id);
      if (result.error) setError(result.error);
    });
  };

  return (
    <div className="space-y-4">
      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded border border-red-100">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Contact Info</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Property/Message</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialEnquiries.map((enq) => (
              <tr key={enq.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                  {new Date(enq.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-foreground">{enq.name}</div>
                  <div className="text-sm text-accent">{enq.phone}</div>
                  {enq.email && <div className="text-xs text-accent">{enq.email}</div>}
                </td>
                <td className="px-6 py-4 text-sm text-foreground max-w-xs">
                  <div className="font-semibold">{enq.interestedProperty || "General Enquiry"}</div>
                  <div className="text-xs text-accent mt-1 line-clamp-2" title={enq.message || ""}>
                    {enq.message || "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={enq.status}
                    onChange={(e) => handleStatusChange(enq.id, e.target.value)}
                    disabled={isPending}
                    className={`text-xs font-bold px-3 py-1.5 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary ${
                      enq.status === 'NEW' ? 'bg-red-50 text-red-700' :
                      enq.status === 'CONTACTED' ? 'bg-blue-50 text-blue-700' :
                      'bg-green-50 text-green-700'
                    }`}
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDelete(enq.id)}
                    disabled={isPending}
                    className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 p-2 rounded hover:bg-red-50"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
            {initialEnquiries.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-accent text-sm">
                  No enquiries yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
