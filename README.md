# COP — Common Operational Picture Prototype

Een front-end prototype van een Common Operational Picture (COP) dashboard, gebouwd om de architectuur, interactielogica en UI-patronen te demonstreren die worden gebruikt in moderne operationele commandosystemen (zoals bij het Ministerie van Defensie).

Dit project simuleert realtime situational awareness door eenheden te volgen, standaard militaire symbolen weer te geven en incidenten te beheren op een interactieve tactische kaart.

## 🚀 Live Demo
Bekijk de live applicatie hier: **[https://cop-simulated.vercel.app/](https://cop-simulated.vercel.app/)**

## ✨ Kernfunctionaliteit

*   **Interactieve Tactische Kaart:** Een op Leaflet gebaseerde kaart met een donker, commandopost-thema, met ondersteuning voor meerdere in- en uitschakelbare kaartlagen (Eenheden, Incidenten, Trajecten).
*   **Militaire Symbolen (APP-6):** Eenheden worden weergegeven met gestandaardiseerde militaire symbolen via `milsymbol`, met onderscheid naar affiliatie (Vriend, Vijand, Neutraal, Onbekend) en domein (Land, Lucht, Zee).
*   **Gesimuleerde Realtime Tracking:** Eenheden bewegen dynamisch over de kaart via een gesimuleerde interval-hook, waarbij ze een visueel spoor van hun recente posities achterlaten.
*   **Incidentenbeheer:** Incidenten worden geplot met een kleurgecodeerde ernst. Een ingebouwd algoritme stelt de gebruiker in staat om direct de *dichtstbijzijnde actieve eenheid* bij een incident te vinden en te markeren.
*   **Filteren & Zoeken:** Gebruikers kunnen eenheden filteren op Affiliatie, Domein en Status, of zoeken op naam om snel specifieke middelen in een complexe omgeving te lokaliseren.

## 🛠️ Technische Stack & Architectuur

*   **Framework:** React 18 + TypeScript (opgezet met Vite)
*   **State-management:** [Zustand](https://github.com/pmndrs/zustand) — Gekozen vanwege de lichtgewicht omvang en nauwkeurige selector-gebaseerde re-rendering (met behulp van `useShallow`), waardoor de kaart en UI performant blijven tijdens frequente positie-updates.
*   **Kaartvisualisatie:** Leaflet & React-Leaflet.
*   **Symbolen:** `react-leaflet-milsymbol` voor strikte APP-6 standaard weergave.
*   **Styling:** Vanilla CSS met moderne CSS Grid/Flexbox, waarbij CSS-filters worden gebruikt om een donker tactisch kaartthema te creëren zonder afhankelijk te zijn van betaalde API-kaartlagen.

### Projectstructuur
*   `src/components/`: Herbruikbare UI-componenten (MapView, FilterBar, UnitList, etc.)
*   `src/store/`: Centraal Zustand state-management
*   `src/hooks/`: Custom hooks (zoals `useSimulatedTracking`, die eenvoudig kan worden vervangen door een echte WebSocket-verbinding)
*   `src/utils/`: Wiskundige hulpfuncties (afstandsberekening, coördinaatverplaatsing)
*   `src/data/`: Gesimuleerde JSON-data voor eenheden en incidenten

## 🚦 Aan de slag

Om dit project lokaal te draaien:

1. Clone de repository:
   ```bash
   git clone https://github.com/jouwgebruikersnaam/COP-Simulated.git
   cd COP-Simulated