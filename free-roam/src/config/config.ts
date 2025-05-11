import { Asset } from "../types";

type Config = {
	fps: Phaser.Types.Core.FPSConfig;
	tileWidth: number;
	player: {
		key: string;
		velocity: number;
		spawn: {
			x: number;
			y: number;
		};
		frameWidth: number;
		frameHeight: number;
		frameRate: number;
	};
	freeRoam: {
		key: string;
	};
	loader: {
		key: string;
	};
	arena: {
		startMatchImage: Asset;
		startMatchImageMobile: Asset;
	};
	lootboxOpen: Asset;
	lootboxClosed: Asset;
	openLootbox: Asset;
	openDungeon: Asset;
	teleporter: {
		Effect: Asset;
		Image: Asset;
	};
	seed: number;
};

const config: Config = {
	fps: {
		min: 10,
		target: 75,
		smoothStep: true,
	},
	tileWidth: 16,
	player: {
		key: "PLAYER",
		velocity: 175,
		spawn: {
			x: 15,
			y: 12,
		},
		frameWidth: 256,
		frameHeight: 256,
		frameRate: 16,
	},
	freeRoam: {
		key: "FREE_ROAM",
	},
	loader: {
		key: "LOADER",
	},
	arena: {
		startMatchImage: {
			key: "start-match",
			url: "/assets/phaser/objects/start-match.webp",
		},
		startMatchImageMobile: {
			key: "start-match-mobile",
			url: "/assets/phaser/objects/start-match-mobile.webp",
		},
	},
	lootboxOpen: {
		key: "LOOTBOX_OPEN",
		url: "/assets/phaser/objects/lootbox-open.webp",
	},
	lootboxClosed: {
		key: "LOOTBOX_CLOSED",
		url: "/assets/phaser/objects/lootbox-closed.webp",
	},
	openLootbox: {
		key: "OPEN_LOOTBOX",
		url: "/assets/phaser/objects/open-lootbox.webp",
	},
	openDungeon: {
		key: "OPEN_DUNGEON",
		url: "/assets/phaser/objects/open-dungeon.webp"
	},
	teleporter: {
		Effect: {
			key: "EFFECTS_TILESET",
			url: "/assets/phaser/objects/effects.webp",
		},
		Image: {
			key: "TELEPORT_IMAGE",
			url: "/assets/phaser/objects/teleport.webp",
		},
	},
	seed: 1234
};

export { config };
