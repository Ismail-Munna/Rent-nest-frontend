"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const initialRequests = [
    { id: "REQ-201", tenant: "Ayesha Khan", property: "Skyline Loft", status: "PENDING" },
    { id: "REQ-202", tenant: "Farhan Ali", property: "Harbor Villa", status: "PENDING" },
];

export function LandlordDashboardPanel() {
    const [requests, setRequests] = useState(initialRequests);

    const handleDecision = (id: string, status: "APPROVED" | "REJECTED") => {
        setRequests((current) => current.filter((request) => request.id !== id));
        toast.success(`Request ${status.toLowerCase()} successfully.`);
    };

    return (
        <div className="space-y-6 p-6">
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Listings</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-semibold">12</CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Incoming Requests</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-semibold">{requests.length}</CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Monthly Earnings</CardTitle>
                    </CardHeader>
                    <CardContent className="text-2xl font-semibold">$8.4k</CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Incoming Requests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {requests.map((request) => (
                        <div key={request.id} className="flex flex-col gap-3 rounded-xl border p-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <p className="font-medium">{request.tenant}</p>
                                <p className="text-sm text-muted-foreground">{request.property}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Badge variant="secondary">{request.status}</Badge>
                                <Button variant="outline" size="sm" onClick={() => handleDecision(request.id, "REJECTED")}>
                                    Reject
                                </Button>
                                <Button size="sm" onClick={() => handleDecision(request.id, "APPROVED")}>
                                    Approve
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}
