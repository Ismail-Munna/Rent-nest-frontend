import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RentalRequestDialog } from "../../_components/RentalRequestDialog";
import { getPropertyById } from "../../_data/properties";

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const property = getPropertyById(id);

    if (!property) {
        notFound();
    }

    return (
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                    <Image
                        src={property.image}
                        alt={property.title}
                        width={1200}
                        height={800}
                        className="h-105 w-full rounded-3xl object-cover"
                    />
                    <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                            <h1 className="text-3xl font-semibold">{property.title}</h1>
                            <Badge>{property.type}</Badge>
                        </div>
                        <p className="text-lg text-muted-foreground">{property.location}</p>
                        <p className="max-w-2xl text-sm leading-7 text-muted-foreground">{property.description}</p>
                    </div>
                </div>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle>Request this home</CardTitle>
                        <CardDescription>Start the rental request journey with a short note.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="rounded-xl border p-4">
                            <p className="text-sm text-muted-foreground">Listed by</p>
                            <p className="font-medium">{property.landlord}</p>
                        </div>
                        <div className="rounded-xl border p-4">
                            <p className="text-sm text-muted-foreground">Monthly rent</p>
                            <p className="text-2xl font-semibold">${property.price}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {property.amenities.map((amenity) => (
                                <Badge key={amenity} variant="outline">
                                    {amenity}
                                </Badge>
                            ))}
                        </div>
                        <RentalRequestDialog propertyTitle={property.title} />
                        <Button asChild variant="outline" className="w-full">
                            <Link href="/properties">Browse more homes</Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
