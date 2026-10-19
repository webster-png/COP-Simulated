import MapView from "./components/MapView";
import LayerControls from "./components/LayerControls";
import FilterBar from "./components/FilterBar";
import UnitList from "./components/UnitList";
import IncidentList from "./components/IncidentList";
import { useSimulatedTracking } from "./hooks/useSimulatedTracking";
import { useCOPStore } from "./store/useCOPStore";
import "./styles/app.css";

export default function App() {
  useSimulatedTracking(2000);
  const geselecteerdeEenheid = useCOPStore((s) => s.eenheden.find((e) => e.id === s.geselecteerdeEenheid));

  return (
      <div className="app">
        <header className="topbar">
          <div className="topbar__brand">
            <span className="topbar__dot" />
            COP · Common Operational Picture
          </div>
          <div className="topbar__status">Live · gesimuleerde tracking</div>
        </header>

        <div className="layout">
          <aside className="sidebar sidebar--links">
            <FilterBar />
            <LayerControls />
            <UnitList />
          </aside>

          <main className="kaart-container">
            <MapView />
            {geselecteerdeEenheid && (
                <div className="detail-kaart">
                  <h4>{geselecteerdeEenheid.naam}</h4>
                  <p>Type: {geselecteerdeEenheid.type} · Domein: {geselecteerdeEenheid.domein}</p>
                  <p>Positie: {geselecteerdeEenheid.positie.lat.toFixed(4)}, {geselecteerdeEenheid.positie.lng.toFixed(4)}</p>
                  <p>Snelheid: {geselecteerdeEenheid.snelheid} km/u · Koers: {geselecteerdeEenheid.koers.toFixed(0)}°</p>
                </div>
            )}
          </main>

          <aside className="sidebar sidebar--rechts">
            <IncidentList />
          </aside>
        </div>
      </div>
  );
}