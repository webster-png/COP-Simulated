import { create } from "zustand";
import type { Eenheid, Incident, Filters, LaagId, Positie } from "../types";
import { initieleEenheden } from "../data/units";
import { initieleIncidenten } from "../data/incidents";
import { useShallow } from 'zustand/react/shallow';

interface COPState {
    eenheden: Eenheid[];
    incidenten: Incident[];
    filters: Filters;
    actieveLagen: Record<LaagId, boolean>;
    geselecteerdeEenheid: string | null;
    geselecteerdIncident: string | null;
    dichtstbijzijndeEenheidId: string | null;

    updateEenheidPositie: (id: string, positie: Positie) => void;
    setFilter: <K extends keyof Filters>(key: K, waarde: Filters[K]) => void;
    resetFilters: () => void;
    toggleLaag: (laag: LaagId) => void;
    selecteerEenheid: (id: string | null) => void;
    selecteerIncident: (id: string | null) => void;
    toonDichtstbijzijndeEenheid: (incidentId: string) => void;
}

const standaardFilters: Filters = {
    affiliatie: "alle",
    domein: "alle",
    status: "alle",
    zoekterm: "",
};

export const useCOPStore = create<COPState>((set, get) => ({
    eenheden: initieleEenheden,
    incidenten: initieleIncidenten,
    filters: standaardFilters,
    actieveLagen: { eenheden: true, incidenten: true, trajecten: true },
    geselecteerdeEenheid: null,
    geselecteerdIncident: null,
    dichtstbijzijndeEenheidId: null,

    updateEenheidPositie: (id, positie) =>
        set((state) => ({
            eenheden: state.eenheden.map((e) =>
                e.id === id
                    ? { ...e, positie, traject: [...e.traject.slice(-30), positie] }
                    : e
            ),
        })),

    setFilter: (key, waarde) =>
        set((state) => ({ filters: { ...state.filters, [key]: waarde } })),

    resetFilters: () => set({ filters: standaardFilters }),

    toggleLaag: (laag) =>
        set((state) => ({
            actieveLagen: { ...state.actieveLagen, [laag]: !state.actieveLagen[laag] },
        })),

    selecteerEenheid: (id) =>
        set({ geselecteerdeEenheid: id, geselecteerdIncident: null }),

    selecteerIncident: (id) =>
        set({ geselecteerdIncident: id, geselecteerdeEenheid: null }),

    toonDichtstbijzijndeEenheid: (incidentId) => {
        const state = get();
        const incident = state.incidenten.find((i) => i.id === incidentId);
        if (!incident) return;

        const actieveEenheden = state.eenheden.filter((e) => e.status === "actief");
        if (actieveEenheden.length === 0) return;

        let dichtstbij: { id: string; afstand: number } | null = null;
        for (const eenheid of actieveEenheden) {
            const dLat = eenheid.positie.lat - incident.positie.lat;
            const dLng = eenheid.positie.lng - incident.positie.lng;
            const afstand = Math.sqrt(dLat * dLat + dLng * dLng);
            if (!dichtstbij || afstand < dichtstbij.afstand) {
                dichtstbij = { id: eenheid.id, afstand };
            }
        }

        set({
            dichtstbijzijndeEenheidId: dichtstbij?.id ?? null,
            geselecteerdeEenheid: dichtstbij?.id ?? null,
            geselecteerdIncident: incidentId,
        });
    },
}));

export function useGefilterdeEenheden(): Eenheid[] {
    return useCOPStore(
        useShallow((state) => {
            const { affiliatie, domein, status, zoekterm } = state.filters;
            const term = zoekterm.toLowerCase().trim();

            return state.eenheden.filter((e) => {
                if (affiliatie !== "alle" && e.affiliatie !== affiliatie) return false;
                if (domein !== "alle" && e.domein !== domein) return false;
                if (status !== "alle" && e.status !== status) return false;
                if (term && !e.naam.toLowerCase().includes(term)) return false;
                return true;
            });
        })
    );
}