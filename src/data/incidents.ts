import type { Incident } from "../types";

export const initieleIncidenten: Incident[] = [
    {
        id: "i1",
        titel: "Verdachte activiteit",
        beschrijving: "Ongeïdentificeerde beweging waargenomen",
        ernst: "middel",
        positie: { lat: 52.0800, lng: 4.2800 },
        tijdstip: "2026-10-19T08:15:00Z",
    },
    {
        id: "i2",
        titel: "Wegblokkade",
        beschrijving: "Hoofdroute geblokkeerd door obstakel",
        ernst: "hoog",
        positie: { lat: 52.1200, lng: 4.3800 },
        tijdstip: "2026-10-19T09:30:00Z",
    },
    {
        id: "i3",
        titel: "Noodsignaal",
        beschrijving: "Zwak noodsignaal ontvangen",
        ernst: "laag",
        positie: { lat: 52.0200, lng: 4.4200 },
        tijdstip: "2026-10-19T10:00:00Z",
    },
];