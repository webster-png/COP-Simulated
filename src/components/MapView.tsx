import { MapContainer, TileLayer, Polyline, Popup, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useCOPStore, useGefilterdeEenheden } from "../store/useCOPStore";
import UnitSymbol from "./UnitSymbol";

const ernstKleur: Record<string, string> = {
    laag: "#22c55e",
    middel: "#f59e0b",
    hoog: "#ef4444",
};

export default function MapView() {
    const eenheden = useGefilterdeEenheden();
    const incidenten = useCOPStore((s) => s.incidenten);
    const lagen = useCOPStore((s) => s.actieveLagen);
    const geselecteerdeEenheid = useCOPStore((s) => s.geselecteerdeEenheid);
    const dichtstbijzijndeId = useCOPStore((s) => s.dichtstbijzijndeEenheidId);
    const selecteerEenheid = useCOPStore((s) => s.selecteerEenheid);
    const selecteerIncident = useCOPStore((s) => s.selecteerIncident);

    return (
        <MapContainer center={[52.08, 4.32]} zoom={12} className="kaart" zoomControl={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {lagen.trajecten &&
                eenheden
                    .filter((e) => e.traject.length > 1)
                    .map((e) => (
                        <Polyline
                            key={`traj-${e.id}`}
                            positions={e.traject.map((p) => [p.lat, p.lng] as [number, number])}
                            pathOptions={{
                                color: e.affiliatie === "friend" ? "#3b82f6" : "#94a3b8",
                                weight: 1.5, opacity: 0.5, dashArray: "4 4",
                            }}
                        />
                    ))}

            {lagen.eenheden &&
                eenheden.map((e) => (
                    <UnitSymbol
                        key={e.id}
                        eenheid={e}
                        geselecteerd={geselecteerdeEenheid === e.id || dichtstbijzijndeId === e.id}
                        onClick={() => selecteerEenheid(e.id)}
                    />
                ))}

            {lagen.incidenten &&
                incidenten.map((i) => (
                    <CircleMarker
                        key={i.id}
                        center={[i.positie.lat, i.positie.lng]}
                        radius={10}
                        pathOptions={{
                            color: ernstKleur[i.ernst], fillColor: ernstKleur[i.ernst], fillOpacity: 0.8, weight: 2,
                        }}
                        eventHandlers={{ click: () => selecteerIncident(i.id) }}
                    >
                        <Popup>
                            <strong>{i.titel}</strong><br />
                            {i.beschrijving}<br />
                            <em>Ernst: {i.ernst}</em>
                        </Popup>
                    </CircleMarker>
                ))}
        </MapContainer>
    );
}