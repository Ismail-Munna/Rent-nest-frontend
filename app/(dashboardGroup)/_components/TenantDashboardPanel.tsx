"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialRequests = [
  { id: "REQ-101", property: "Skyline Loft", status: "APPROVED", moveIn: "Aug 12" },
  { id: "REQ-102", property: "Harbor Villa", status: "PENDING", moveIn: "Sep 01" },
  { id: "REQ-103", property: "Cozy Studio", status: "ACTIVE", moveIn: "Jul 28" },
];

const statusStyles: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  APPROVED: "default",
  REJECTED: "destructive",
  ACTIVE: "outline",
  COMPLETED: "secondary",
};

export function TenantDashboardPanel() {
  const [requests, setRequests] = useState(initialRequests);

  const handlePayment = (id: string) => {
    setRequests((current) => current.map((item) => (item.id === id ? { ...item, status: "ACTIVE" } : item)));
    toast.success("Payment flow ready. You can continue to checkout.");
  };

  return (
    <div className="space-y-6 p-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Requests</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">{requests.length}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Awaiting Payment</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">1</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Reviews Left</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">2</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Rental Request History</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {requests.map((request) => (
            <div key={request.id} className="flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-medium">{request.property}</p>
                <p className="text-sm text-muted-foreground">Move-in: {request.moveIn}</p>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={statusStyles[request.status] ?? "secondary"}>{request.status}</Badge>
                {request.status === "APPROVED" && (
                  <Button onClick={() => handlePayment(request.id)} size="sm">
                    Pay Now
                  </Button>
                )}
                {request.status === "ACTIVE" && <Button variant="outline" size="sm">Leave Review</Button>}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
