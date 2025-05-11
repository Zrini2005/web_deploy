import { css, html, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import Phaser from "phaser";
import { Buffer } from "buffer";
import { config } from "./config/config";
import { createComponent } from "@lit-labs/react";
import React from "react";
import { eventEmitter, Events } from "./events/EventEmitters";
import { ProceduralFreeRoam } from "./scenes/Procedural-FreeRoam";
import { LootboxDetails } from "./types";
import { coordinatesOverlay } from "./scenes/coordinatesOverlay";

const decrypt = (text: string, key: string) => {
	return Number(
		Buffer.from(text, "base64")
			.toString("utf-8")
			.replace(key + key, "")
	);
};

@customElement("free-roam")
class FreeRoam extends LitElement {
	static styles = css`
		:host {
			display: block;
			width: 100%;
			height: 100%;
		}
	`;

	private freeRoamGame!: Phaser.Game;

	@property({ type: Array }) lootboxDetails: {
		ID: number;
		isOpen: boolean;
	}[] = [];
	@property({ type: String }) characterURL = "";
	@property({ type: String }) clanFlagUrl = "";
	@property({ type: String }) seedString = ""

	firstUpdated(): void {
		this.lootboxDetails.forEach((lootboxDetail) => {
		});

		this.freeRoamGame = new Phaser.Game({
			type: Phaser.AUTO,
			pixelArt: true,
			parent:
				this.shadowRoot?.querySelector<HTMLElement>("#free-roam") ??
				undefined,
			scene: [
				new ProceduralFreeRoam(
					this.lootboxDetails as LootboxDetails[],
					this.seedString
				),
				new coordinatesOverlay(),
			],
			dom: {
				createContainer: false,
			},
			scale: {
				mode: Phaser.Scale.RESIZE,
				autoCenter: Phaser.Scale.CENTER_BOTH,
			},
			fps: config.fps,
			backgroundColor: "#292634",
			physics: {
				default: "arcade",
				arcade: {
					gravity: { x: 0, y: 0 },
					debug: false,
					fps: config.fps.target,
				},
			},
			banner: false,
		});
	}

	disconnectedCallback(): void {
		this.freeRoamGame.destroy(true, false);
	}

	render(): TemplateResult {
		const realWidth = window.screen.width * window.devicePixelRatio;
		const realHeight = window.screen.height * window.devicePixelRatio;
		window.innerHeight = realHeight;
		window.innerWidth = realWidth;
		return html`<div id="free-roam"></div>`;
	}
}

const FreeRoamLayer = createComponent({
	tagName: "free-roam",
	elementClass: FreeRoam,
	react: React,
});

export { FreeRoamLayer, FreeRoam, eventEmitter, Events };
