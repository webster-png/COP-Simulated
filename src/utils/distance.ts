import type { Positie } from "../types";

export function afstandKm(a: Positie, b: Positie): number {
    const R = 6371;
    const dLat = ((b.lat - a.lat) * Math.PI) / 180;
    const dLng = ((b.lng - a.lng) * Math.PI) / 180;
    const lat1 = (a.lat * Math.PI) / 180;
    const lat2 = (b.lat * Math.PI) / 180;
    const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(h));
}

export function verplaats(positie: Positie, snelheidKmU: number, koersGraden: number, nSeconden: number): Positie {
    const afstandKm = (snelheidKmU / 3600) * nSeconden;
    const rad = (koersGraden * Math.PI) / 180;
    const dLat = (afstandKm / 111.32) * Math.cos(rad);
    const dLng = (afstandKm / (111.32 * Math.cos((positie.lat * Math.PI) / 180))) * Math.sin(rad);
    return { lat: positie.lat + dLat, lng: positie.lng + dLng };
}