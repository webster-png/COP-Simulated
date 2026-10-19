export type Affiliatie = "friend" | "hostile" | "neutral" | "unknown";
export type Domein = "land" | "air" | "sea";
export type EenheidStatus = "actief" | "inactief" | "onderhoud";

export interface Positie {
    lat: number;
    lng: number;
}

export interface Eenheid {
    id: string;
    naam: string;
    type: string;
    affiliatie: Affiliatie;
    domein: Domein;
    status: EenheidStatus;
    positie: Positie;
    snelheid: number;
    koers: number;
    traject: Positie[];
    sidc: string;
}

export interface Incident {
    id: string;
    titel: string;
    beschrijving: string;
    ernst: "laag" | "middel" | "hoog";
    positie: Positie;
    tijdstip: string;
}

export type LaagId = "eenheden" | "incidenten" | "trajecten";

export interface Filters {
    affiliatie: Affiliatie | "alle";
    domein: Domein | "alle";
    status: EenheidStatus | "alle";
    zoekterm: string;
}