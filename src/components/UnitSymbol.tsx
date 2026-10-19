import { MilSymbol } from "react-leaflet-milsymbol";
import type { Eenheid } from "../types";

interface Props {
    eenheid: Eenheid;
    geselecteerd: boolean;
    onClick: () => void;
}

export default function UnitSymbol({ eenheid, geselecteerd, onClick }: Props) {
    return (
        <MilSymbol
            position={[eenheid.positie.lat, eenheid.positie.lng]}
            sidc={eenheid.sidc}
            options={{ size: geselecteerd ? 32 : 26 }}
            eventHandlers={{ click: onClick }}
        />
    );
}