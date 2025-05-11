import { Events } from "../FreeRoam";
import { RegionType, RegionName, LootboxDetails } from "../types.d";

const centralRegion: RegionType = {
	name: RegionName.CENTRAL,
	asset: {
		tileset: {
			key: "CENTRAL_TILESET",
			url: "/assets/phaser/maps/central/tileset.webp",
		},
		map: {
			key: "CENTRAL_MAP",
			url: "/assets/phaser/maps/central/map.json",
		},
		overlay: {
			key: "CENTRAL_OVERLAY",
			url: "/assets/phaser/maps/central/overlay.webp",
		},
		glitchTiles: {
			key: "GLITCH_OVERLAY",
			url: "/assets/phaser/maps/central/glitch-tiles.webp",
		},
		glitchMap: {
			key: "GLITCH_MAP",
			url: "/assets/phaser/maps/central/glitch-overlay.json",
		}
	},
	spawnPoint: {
		x: 42,
		y: 43,
	},
	Teleporter: {
		portal: {
			tileset: {
				key: "CENTRAL_PORTAL_TILESET",
				url: "/assets/phaser/maps/central/portal.webp",
			},
			map: {
				key: "CENTRAL_PORTAL_MAP",
				url: "/assets/phaser/maps/central/portal.json",
			},
		},
		anchorPoint: {
			x: 42,
			y: 42,
		},
		staticAnim: false,
		effectMap: {
			key: "CENTRAL_EFFECT_MAP",
			url: "/assets/phaser/maps/central/effects.json",
		},
	},
	lootboxesDetails: [],
	Interactives: [{
		name: "MARKET",
		image: {
			url: "/assets/phaser/objects/open-market.webp",
			key: "open-market",
		},
		event: Events.OPEN_MARKET,
		coordinates: {
			x: -19,
			y: -20,
		}
	}, {
		name: "LEADERBOARD",
		image: {
			url: "/assets/phaser/objects/open-leaderboard.webp",
			key: "open-leader",
		},
		event: Events.OPEN_LEADERBOARD,
		coordinates: {
			x: 6,
			y: -26,
		}
	},
	{
		name: "ARENA",
		image: {
			url: "/assets/phaser/objects/start-match.webp",
			key: "start-match",
		},
		event: Events.START_MATCHMAKING,
		coordinates: {
			x: 18,
			y: 13,
		}
	}]
};
const maps = {
	[RegionName.CENTRAL]: centralRegion,
};

export {
	centralRegion,
	maps,
};
