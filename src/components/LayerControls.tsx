import { useCOPStore } from "../store/useCOPStore";
import type { LaagId } from "../types";

const LAGEN: { id: LaagId; label: string }[] = [
    { id: "eenheden", label: "Eenheden" },
    { id: "incidenten", label: "Incidenten" },
    { id: "trajecten", label: "Trajecten" },
];

export default function LayerControls() {
    const lagen = useCOPStore((s) => s.actieveLagen);
    const toggleLaag = useCOPStore((s) => s.toggleLaag);

    return (
        <div className="paneel">
            <h3>Kaartlagen</h3>
            {LAGEN.map((laag) => (
                <label key={laag.id} className="laag-toggle">
                    <input type="checkbox" checked={lagen[laag.id]} onChange={() => toggleLaag(laag.id)} />
                    {laag.label}
                </label>
            ))}
        </div>
    );
}