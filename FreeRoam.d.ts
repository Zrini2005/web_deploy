import { LitElement, TemplateResult } from "lit";
import { eventEmitter, Events } from "./events/EventEmitters";
declare class FreeRoam extends LitElement {
    static styles: import("lit").CSSResult;
    private freeRoamGame;
    lootboxDetails: {
        ID: number;
        isOpen: boolean;
    }[];
    characterURL: string;
    clanFlagUrl: string;
    seedString: string;
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): TemplateResult;
}
declare const FreeRoamLayer: React.ForwardRefExoticComponent<any>;
export { FreeRoamLayer, FreeRoam, eventEmitter, Events };
