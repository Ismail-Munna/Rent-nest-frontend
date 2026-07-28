import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PaymentCancelPage() {
    return (
        <div className="mx-auto flex max-w-3xl items-center justify-center px-4 py-20">
            <Card className="w-full text-center">
                <CardHeader>
                    <CardTitle className="text-2xl">Payment cancelled</CardTitle>
                    <CardDescription>No charges were made and you can try again whenever you are ready.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Return to checkout or continue browsing the available properties.
                    </p>
                    <div className="flex justify-center gap-3">
                        <Button asChild>
                            <Link href="/payment">Try again</Link>
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
