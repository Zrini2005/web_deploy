import { LitElement, TemplateResult } from "lit";
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
declare const FreeRoamLayer: import("@lit-labs/react").ReactWebComponent<FreeRoam, {}>;
export { FreeRoamLayer, FreeRoam };
