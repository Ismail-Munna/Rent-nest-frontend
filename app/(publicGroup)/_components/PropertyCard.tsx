import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Property } from "../_data/properties";

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={property.image}
        alt={property.title}
        width={800}
        height={500}
        className="h-48 w-full object-cover"
      />
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{property.title}</CardTitle>
          <Badge variant="secondary">{property.type}</Badge>
        </div>
        <CardDescription>{property.location}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{property.description}</p>
        <div className="flex flex-wrap gap-2">
          {property.amenities.map((item) => (
            <Badge key={item} variant="outline">
              {item}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">${property.price}/month</p>
          <Button asChild size="sm">
            <Link href={`/properties/${property.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
