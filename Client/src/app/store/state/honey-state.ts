import { Honey } from "../../models/view-models/honey.model";

export interface HoneyState {
    honeys: Honey[]
}

export const InitialHoneyState: HoneyState = {
   honeys: new Array<Honey>()
}