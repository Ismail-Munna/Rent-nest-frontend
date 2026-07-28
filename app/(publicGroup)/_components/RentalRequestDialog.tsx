"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function RentalRequestDialog({ propertyTitle }: { propertyTitle: string }) {
  const [reason, setReason] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!reason.trim()) {
      toast.error("Please share a short note for the landlord.");
      return;
    }

    toast.success(`Request sent for ${propertyTitle}.`);
    setOpen(false);
    setReason("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Request to Rent</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Request this property</DialogTitle>
          <DialogDescription>
            Share your move-in date and note so the landlord can review your request.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input type="date" required />
          <Textarea
            placeholder="Tell the landlord why you are interested in this home..."
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            required
          />
          <DialogFooter>
            <Button type="submit">Submit Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
