import { useCOPStore, useGefilterdeEenheden } from "../store/useCOPStore";

const affiliatieLabel: Record<string, string> = {
    friend: "Vriend", hostile: "Vijand", neutral: "Neutraal", unknown: "Onbekend",
};

export default function UnitList() {
    const eenheden = useGefilterdeEenheden();
    const geselecteerde = useCOPStore((s) => s.geselecteerdeEenheid);
    const selecteer = useCOPStore((s) => s.selecteerEenheid);

    return (
        <div className="paneel">
            <h3>Eenheden ({eenheden.length})</h3>
            {eenheden.length === 0 && <p className="leeg">Geen eenheden voldoen aan de filters.</p>}
            <ul className="lijst">
                {eenheden.map((e) => (
                    <li key={e.id} className={`lijst-item ${geselecteerde === e.id ? "actief" : ""}`} onClick={() => selecteer(e.id)}>
                        <div className="lijst-item__titel">{e.naam}</div>
                        <div className="lijst-item__meta">
                            {affiliatieLabel[e.affiliatie]} · {e.domein} · {e.status} · {e.snelheid} km/u
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}