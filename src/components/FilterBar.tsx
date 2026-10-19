import { useCOPStore } from "../store/useCOPStore";
import type { Affiliatie, Domein, EenheidStatus } from "../types";

export default function FilterBar() {
    const filters = useCOPStore((s) => s.filters);
    const setFilter = useCOPStore((s) => s.setFilter);
    const resetFilters = useCOPStore((s) => s.resetFilters);

    return (
        <div className="paneel filterbar">
            <h3>Filters</h3>
            <label>
                Zoeken
                <input type="search" placeholder="Naam eenheid..." value={filters.zoekterm} onChange={(e) => setFilter("zoekterm", e.target.value)} />
            </label>
            <label>
                Affiliatie
                <select value={filters.affiliatie} onChange={(e) => setFilter("affiliatie", e.target.value as Affiliatie | "alle")}>
                    <option value="alle">Alle</option>
                    <option value="friend">Vriend</option>
                    <option value="hostile">Vijand</option>
                    <option value="neutral">Neutraal</option>
                    <option value="unknown">Onbekend</option>
                </select>
            </label>
            <label>
                Domein
                <select value={filters.domein} onChange={(e) => setFilter("domein", e.target.value as Domein | "alle")}>
                    <option value="alle">Alle</option>
                    <option value="land">Land</option>
                    <option value="air">Lucht</option>
                    <option value="sea">Zee</option>
                </select>
            </label>
            <label>
                Status
                <select value={filters.status} onChange={(e) => setFilter("status", e.target.value as EenheidStatus | "alle")}>
                    <option value="alle">Alle</option>
                    <option value="actief">Actief</option>
                    <option value="inactief">Inactief</option>
                    <option value="onderhoud">Onderhoud</option>
                </select>
            </label>
            <button className="knop-secundair" onClick={resetFilters}>Reset filters</button>
        </div>
    );
}