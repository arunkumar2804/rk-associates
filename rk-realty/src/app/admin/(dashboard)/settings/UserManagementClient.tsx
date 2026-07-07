"use client";

import { useState, useTransition, useEffect } from "react";
import { Loader2, Plus, Edit2, Trash2, Shield, User, X } from "lucide-react";
import { createUser, updateUser, deleteUser, getUsers } from "@/app/actions/user";

interface UserType {
  id: string;
  name: string;
  email: string;
  role: string;
  isFullControl: boolean;
  createdAt: Date;
}

export default function UserManagementClient() {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPending, startTransition] = useTransition();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<UserType | null>(null);
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFullControl, setIsFullControl] = useState(true);
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err: any) {
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchUsers();
  }, []);

  const openAddModal = () => {
    setEditingUser(null);
    setName("");
    setEmail("");
    setPassword("");
    setIsFullControl(true);
    setError(null);
    setIsModalOpen(true);
  };

  const openEditModal = (user: UserType) => {
    setEditingUser(user);
    setName(user.name);
    setEmail(user.email);
    setPassword(""); // Keep password empty unless changing
    setIsFullControl(user.isFullControl);
    setError(null);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email) {
      setError("Name and Email are required");
      return;
    }

    startTransition(async () => {
      let result;
      if (editingUser) {
        result = await updateUser(editingUser.id, {
          name,
          email,
          password: password || undefined,
          isFullControl,
        });
      } else {
        if (!password) {
          setError("Password is required for new users");
          return;
        }
        result = await createUser({
          name,
          email,
          password,
          isFullControl,
        });
      }

      if (result.error) {
        setError(result.error);
      } else {
        setSuccess(editingUser ? "User updated successfully!" : "User created successfully!");
        setIsModalOpen(false);
        fetchUsers();
        setTimeout(() => setSuccess(null), 3000);
      }
    });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;

    try {
      const result = await deleteUser(id);
      if (result.error) {
        alert(result.error);
      } else {
        setSuccess("User deleted successfully!");
        fetchUsers();
        setTimeout(() => setSuccess(null), 3000);
      }
    } catch (err) {
      alert("Failed to delete user");
    }
  };

  return (
    <div className="space-y-6 pb-20">
      {success && <div className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-200">{success}</div>}

      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold text-foreground">Manage Team Users</h3>
          <p className="text-accent text-sm">Create user logins and toggle their full control access</p>
        </div>
        <button 
          onClick={openAddModal}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors font-bold shadow-md"
        >
          <Plus size={18} /> Add User
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 className="animate-spin text-primary" size={32} />
        </div>
      ) : (
        <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background border-b border-border">
                <th className="px-6 py-4 text-xs font-bold text-accent uppercase tracking-wider">User</th>
                <th className="px-6 py-4 text-xs font-bold text-accent uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-bold text-accent uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-accent uppercase tracking-wider">Full Control</th>
                <th className="px-6 py-4 text-xs font-bold text-accent uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-foreground">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-accent/10 text-accent">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {user.isFullControl ? (
                      <span className="flex items-center gap-1 text-green-600 font-medium text-sm">
                        <Shield size={16} /> Enabled
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-red-500 font-medium text-sm">
                        Disabled
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button 
                      onClick={() => openEditModal(user)}
                      className="p-2 hover:bg-background rounded-lg text-accent hover:text-foreground transition-colors"
                      title="Edit User"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)}
                      className="p-2 hover:bg-background rounded-lg text-accent hover:text-red-600 transition-colors"
                      title="Delete User"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-accent">
                    No users found. Create one to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-scaleUp">
            <div className="px-6 py-4 border-b border-border flex justify-between items-center bg-background">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <User size={18} className="text-primary" />
                {editingUser ? "Edit User Account" : "Create New User"}
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 hover:bg-background rounded-lg text-accent hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-6 space-y-4">
              {error && (
                <div className="p-3 bg-red-50 text-red-600 rounded-lg border border-red-100 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">Email (Login ID)</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary"
                  placeholder="john@rkrealty.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-1">
                  Password {editingUser && "(Leave blank to keep current)"}
                </label>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-border bg-background rounded-lg text-foreground focus:ring-2 focus:ring-primary"
                  placeholder="••••••••"
                  required={!editingUser}
                />
              </div>

              {/* Full Control Toggle */}
              <div className="flex items-center justify-between p-4 bg-background border border-border rounded-xl mt-4">
                <div>
                  <div className="text-sm font-bold text-foreground">Full Control Permission</div>
                  <div className="text-xs text-accent mt-0.5">Toggle off to restrict editing settings & critical items</div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isFullControl}
                    onChange={(e) => setIsFullControl(e.target.checked)}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-background border border-border text-foreground hover:bg-background/80 rounded-lg transition-colors font-semibold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="flex items-center gap-2 px-5 py-2 bg-primary text-white hover:bg-primary-hover rounded-lg transition-colors font-semibold disabled:opacity-50"
                >
                  {isPending && <Loader2 size={16} className="animate-spin" />}
                  {editingUser ? "Update User" : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
