import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentSuccessPage() {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-center px-4 py-20">
      <Card className="w-full text-center">
        <CardHeader>
          <CardTitle className="text-2xl">Payment successful</CardTitle>
          <CardDescription>Your premium membership is now active and your account is ready to access exclusive content.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            You can now continue to your dashboard and keep exploring the marketplace.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild>
              <Link href="/dashboard">Go to dashboard</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
