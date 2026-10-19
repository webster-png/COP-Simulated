import { useEffect } from "react";
import { useCOPStore } from "../store/useCOPStore";
import { verplaats } from "../utils/distance";

export function useSimulatedTracking(intervalMs = 2000) {
    const eenheden = useCOPStore((s) => s.eenheden);
    const updateEenheidPositie = useCOPStore((s) => s.updateEenheidPositie);

    useEffect(() => {
        const timer = setInterval(() => {
            for (const eenheid of eenheden) {
                if (eenheid.status !== "actief" || eenheid.snelheid === 0) continue;

                const nieuweKoers = (eenheid.koers + (Math.random() - 0.5) * 20 + 360) % 360;
                const nieuwePositie = verplaats(eenheid.positie, eenheid.snelheid, nieuweKoers, intervalMs / 1000);
                updateEenheidPositie(eenheid.id, nieuwePositie);
            }
        }, intervalMs);

        return () => clearInterval(timer);
    }, [eenheden, intervalMs, updateEenheidPositie]);
}