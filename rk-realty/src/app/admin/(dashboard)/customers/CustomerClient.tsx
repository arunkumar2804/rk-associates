"use client";

import { useState, useTransition } from "react";
import { Plus, Trash2, Loader2, Edit } from "lucide-react";
import { createCustomer, deleteCustomer, updateCustomer } from "@/app/actions/customer";
import { Customer } from "@prisma/client";

export default function CustomerClient({ initialCustomers }: { initialCustomers: Customer[] }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleSave = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const interestedProperties = formData.get("interestedProperties") as string;
    const notes = formData.get("notes") as string;

    if (!name || !phone) return;

    setError(null);
    startTransition(async () => {
      const data = { name, phone, email, interestedProperties, notes };
      const result = editingId 
        ? await updateCustomer(editingId, data)
        : await createCustomer(data);

      if (result.error) {
        setError(result.error);
      } else {
        (document.getElementById("customer-form") as HTMLFormElement).reset();
        setEditingId(null);
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this customer?")) return;

    setError(null);
    startTransition(async () => {
      const result = await deleteCustomer(id);
      if (result.error) setError(result.error);
    });
  };

  const handleEditClick = (c: Customer) => {
    setEditingId(c.id);
    const form = document.getElementById("customer-form") as HTMLFormElement;
    if (!form) return;
    (form.elements.namedItem("name") as HTMLInputElement).value = c.name;
    (form.elements.namedItem("phone") as HTMLInputElement).value = c.phone;
    (form.elements.namedItem("email") as HTMLInputElement).value = c.email || "";
    (form.elements.namedItem("interestedProperties") as HTMLInputElement).value = c.interestedProperties || "";
    (form.elements.namedItem("notes") as HTMLInputElement).value = c.notes || "";
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    (document.getElementById("customer-form") as HTMLFormElement).reset();
  };

  return (
    <div className="space-y-10">
      <form id="customer-form" action={handleSave} className="space-y-6 bg-background p-6 rounded-xl border border-border">
        <h3 className="text-lg font-bold text-foreground">
          {editingId ? "Edit Customer" : "Add New Customer"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Name *</label>
            <input type="text" name="name" required disabled={isPending} className="w-full px-4 py-2 border border-border bg-card rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Phone *</label>
            <input type="text" name="phone" required disabled={isPending} className="w-full px-4 py-2 border border-border bg-card rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="+91 9876543210" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
            <input type="email" name="email" disabled={isPending} className="w-full px-4 py-2 border border-border bg-card rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
          </div>
          <div className="lg:col-span-3">
            <label className="block text-sm font-semibold text-foreground mb-1">Interested Properties</label>
            <input type="text" name="interestedProperties" disabled={isPending} className="w-full px-4 py-2 border border-border bg-card rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="e.g. Sobha Dream Acres, 2BHK in Whitefield" />
          </div>
          <div className="lg:col-span-3">
            <label className="block text-sm font-semibold text-foreground mb-1">Notes</label>
            <textarea name="notes" rows={2} disabled={isPending} className="w-full px-4 py-2 border border-border bg-card rounded-lg text-foreground focus:ring-2 focus:ring-primary" placeholder="Customer requirements, budget, timeline..."></textarea>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" disabled={isPending} className="flex items-center gap-2 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50 font-bold">
            {isPending ? <Loader2 size={18} className="animate-spin" /> : <Plus size={18} />}
            {editingId ? "Save Changes" : "Add Customer"}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancelEdit} disabled={isPending} className="px-6 py-2 border border-border text-foreground rounded-lg hover:bg-card transition-colors font-bold">
              Cancel
            </button>
          )}
        </div>
      </form>

      {error && <p className="text-red-500 text-sm bg-red-50 p-3 rounded border border-red-100">{error}</p>}

      <div className="border border-border rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-border">
          <thead className="bg-background">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Customer</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Interests</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-foreground uppercase tracking-wider">Notes</th>
              <th className="px-6 py-4 text-right text-xs font-bold text-foreground uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-card divide-y divide-border">
            {initialCustomers.map((c) => (
              <tr key={c.id} className="hover:bg-background transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-bold text-foreground">{c.name}</div>
                  <div className="text-sm text-accent">{c.phone}</div>
                  {c.email && <div className="text-xs text-accent">{c.email}</div>}
                </td>
                <td className="px-6 py-4 text-sm text-foreground max-w-xs truncate">
                  {c.interestedProperties || "-"}
                </td>
                <td className="px-6 py-4 text-sm text-accent max-w-xs truncate">
                  {c.notes || "-"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => handleEditClick(c)} disabled={isPending} className="text-blue-500 hover:text-blue-700 transition-colors p-2 rounded hover:bg-blue-50">
                      <Edit size={18} />
                    </button>
                    <button onClick={() => handleDelete(c.id)} disabled={isPending} className="text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 p-2 rounded hover:bg-red-50">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {initialCustomers.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-accent text-sm">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
