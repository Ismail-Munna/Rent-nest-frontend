import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyCard } from "./_components/PropertyCard";
import { properties } from "./_data/properties";

export default async function HomePage() {
  const featured = properties.slice(0, 3);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 rounded-3xl border bg-gradient-to-br from-primary/10 via-background to-background p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <Badge variant="secondary">RentNest Marketplace</Badge>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Find a place that feels like home.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Browse premium rentals, submit requests in minutes, and manage the whole journey from one modern dashboard.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/properties">Explore Listings</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/payment">View Membership</Link>
            </Button>
          </div>
        </div>

        <Card className="bg-background/90">
          <CardHeader>
            <CardTitle>Why RentNest works</CardTitle>
            <CardDescription>Built for tenants, landlords, and admins alike.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-muted-foreground">
            <div className="rounded-xl border p-3">Fast request approvals with clear status updates.</div>
            <div className="rounded-xl border p-3">Role-aware dashboards for every account type.</div>
            <div className="rounded-xl border p-3">Designed for responsive browsing and payment flows.</div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured Properties</h2>
            <p className="text-sm text-muted-foreground">A curated look at some of the newest homes on the platform.</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/properties">View All</Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
}
