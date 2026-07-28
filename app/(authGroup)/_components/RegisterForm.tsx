"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const role = formData.get("role")?.toString() ?? "USER";

    toast.success(`Welcome aboard! Your ${role.toLowerCase()} account is ready.`);
    setIsSubmitting(false);
    router.push("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Card className="space-y-4 p-5">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" name="name" placeholder="Enter your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="Enter your email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" placeholder="Create a password" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <select
            id="role"
            name="role"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            defaultValue="USER"
          >
            <option value="USER">Tenant</option>
            <option value="AUTHOR">Landlord</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Creating account..." : "Create account"}
        </Button>
      </Card>
    </form>
  );
}
