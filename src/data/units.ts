import type { Eenheid } from "../types";

export const initieleEenheden: Eenheid[] = [
    {
        id: "u1",
        naam: "1e Peloton Infanterie",
        type: "infanterie",
        affiliatie: "friend",
        domein: "land",
        status: "actief",
        positie: { lat: 52.0705, lng: 4.3007 },
        snelheid: 15,
        koers: 45,
        traject: [],
        sidc: "SFGPUC--------I", // 15 chars
    },
    {
        id: "u2",
        naam: "Verkenningseenheid",
        type: "verkenners",
        affiliatie: "friend",
        domein: "land",
        status: "actief",
        positie: { lat: 52.0907, lng: 4.3099 },
        snelheid: 25,
        koers: 120,
        traject: [],
        sidc: "SFGPUCR-------I", // 15 chars
    },
    {
        id: "u3",
        naam: "F-16 Squadron",
        type: "jachtvliegtuig",
        affiliatie: "friend",
        domein: "air",
        status: "actief",
        positie: { lat: 52.1500, lng: 4.4500 },
        snelheid: 800,
        koers: 270,
        traject: [],
        sidc: "SFAPMF--------I", // 15 chars
    },
    {
        id: "u4",
        naam: "Onbekende Eenheid",
        type: "onbekend",
        affiliatie: "unknown",
        domein: "land",
        status: "actief",
        positie: { lat: 52.0300, lng: 4.2500 },
        snelheid: 10,
        koers: 90,
        traject: [],
        sidc: "SUGPU---------I", // 15 chars
    },
    {
        id: "u5",
        naam: "Patrouillevaartuig",
        type: "maritiem",
        affiliatie: "friend",
        domein: "sea",
        status: "actief",
        positie: { lat: 52.1000, lng: 4.2000 },
        snelheid: 30,
        koers: 180,
        traject: [],
        sidc: "SFSPP---------I", // 15 chars
    },
    {
        id: "u6",
        naam: "Logistieke Eenheid",
        type: "logistiek",
        affiliatie: "friend",
        domein: "land",
        status: "onderhoud",
        positie: { lat: 52.0500, lng: 4.3500 },
        snelheid: 0,
        koers: 0,
        traject: [],
        sidc: "SFGPUS--------I", // 15 chars
    },
];