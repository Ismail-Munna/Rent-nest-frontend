import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PropertyCard } from "../_components/PropertyCard";
import { properties } from "../_data/properties";

export default function PropertiesPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 rounded-2xl border bg-background/80 p-6 shadow-sm md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Discover Rentals</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Filter by location, price, and amenities to find your next home.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Price Range</Button>
          <Button variant="outline">Property Type</Button>
          <Button variant="outline">Amenities</Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Quick Filters</CardTitle>
            <CardDescription>Browse with real-time UI filters.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <p className="mb-2 font-medium">Location</p>
              <p className="text-muted-foreground">Dhaka, Chittagong, Sylhet</p>
            </div>
            <div>
              <p className="mb-2 font-medium">Price</p>
              <p className="text-muted-foreground">Under $3000</p>
            </div>
            <div>
              <p className="mb-2 font-medium">Type</p>
              <p className="text-muted-foreground">Apartment, Villa, Studio</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <Button asChild variant="outline">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  );
}
