export class Product {
    id: number;
    name: string;
    price: number;
    year: number;
    weight: string;
    brandId: number; // foreigh key to /api/brands
}
