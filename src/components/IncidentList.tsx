import { useCOPStore } from "../store/useCOPStore";

export default function IncidentList() {
    const incidenten = useCOPStore((s) => s.incidenten);
    const geselecteerd = useCOPStore((s) => s.geselecteerdIncident);
    const selecteer = useCOPStore((s) => s.selecteerIncident);
    const toonDichtstbij = useCOPStore((s) => s.toonDichtstbijzijndeEenheid);

    return (
        <div className="paneel">
            <h3>Incidenten ({incidenten.length})</h3>
            <ul className="lijst">
                {incidenten.map((i) => (
                    <li key={i.id} className={`lijst-item ernst-${i.ernst} ${geselecteerd === i.id ? "actief" : ""}`} onClick={() => selecteer(i.id)}>
                        <div className="lijst-item__titel">{i.titel}</div>
                        <div className="lijst-item__meta">
                            Ernst: {i.ernst} · {new Date(i.tijdstip).toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" })}
                        </div>
                        <button className="knop-mini" onClick={(e) => { e.stopPropagation(); toonDichtstbij(i.id); }}>
                            Toon dichtstbijzijnde eenheid
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}