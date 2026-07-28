export type Property = {
    id: string;
    title: string;
    location: string;
    price: number;
    type: string;
    bedrooms: number;
    bathrooms: number;
    image: string;
    description: string;
    amenities: string[];
    landlord: string;
    featured?: boolean;
};

export const properties: Property[] = [
    {
        id: "skyline-loft",
        title: "Skyline Loft",
        location: "Downtown, Dhaka",
        price: 1800,
        type: "Apartment",
        bedrooms: 2,
        bathrooms: 2,
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        description:
            "Bright loft with skyline views, smart lock entry, and a quiet workspace for remote professionals.",
        amenities: ["Pet Friendly", "Parking", "Fast Wi-Fi"],
        landlord: "Nadia Rahman",
        featured: true,
    },
    {
        id: "harbor-villa",
        title: "Harbor Villa",
        location: "Gulshan, Dhaka",
        price: 2600,
        type: "Villa",
        bedrooms: 4,
        bathrooms: 3,
        image:
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
        description:
            "A premium villa with a garden patio, rooftop lounge, and easy access to the metro line.",
        amenities: ["Garden", "Rooftop", "Security"],
        landlord: "Imran Hossain",
        featured: true,
    },
    {
        id: "cozy-studio",
        title: "Cozy Studio",
        location: "Banani, Dhaka",
        price: 1400,
        type: "Studio",
        bedrooms: 1,
        bathrooms: 1,
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        description:
            "Minimal and modern studio with a kitchenette, walk-in closet, and laundry facilities.",
        amenities: ["Laundry", "Balcony", "Furnished"],
        landlord: "Sadia Noor",
        featured: true,
    },
];

export const getPropertyById = (id: string) =>
    properties.find((property) => property.id === id);
