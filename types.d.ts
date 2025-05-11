
export type LootboxDetails = {
	isOpen: boolean;
	ID: number;
};
export type Animation = {
	startFrame: number;
	endFrame: number;
};

export type Animations = {
	[key: string]: Animation;
};

export enum RegionName {
	// eslint-disable-next-line no-unused-vars
	CENTRAL = "CENTRAL",
}

export enum Layer {
	// eslint-disable-next-line no-unused-vars
	BELOW_PLAYER = "BELOW_PLAYER_LAYER",
	// eslint-disable-next-line no-unused-vars
	ABOVE_PLAYER = "ABOVE_PLAYER_LAYER",
	// eslint-disable-next-line no-unused-vars
	OBJECTS = "OBJECTS_LAYER",
	// eslint-disable-next-line no-unused-vars
	PORTAL_LAYER = "PORTAL_LAYER",
	// eslint-disable-next-line no-unused-vars
	PORTAL_LAYER_ABOVE = "PORTAL_LAYER_ABOVE",
	// eslint-disable-next-line no-unused-vars
	EFFECT_LAYER = "EFFECT_LAYER",
	// eslint-disable-next-line no-unused-vars
	GLTICH_LAYER = "GLITCH_OVERLAY"
}

export type Asset = {
	url: string;
	key: string;
};

export type RegionAsset = {
	map: Asset;
	tileset: Asset;
	overlay?: Asset;
	glitchTiles?: Asset;
	glitchMap?: Asset;
};

export type Point = {
	x: number;
	y: number;
};

export type ArenaDetails = {
	id: number;
	coordinates: Point;
};

export type TeleporterDetails = {
	portal?: RegionAsset;
	anchorPoint: Point;
	effectMap: Asset;
	staticAnim: boolean;
};

export type FlagMapDetails = {
	map: Asset;
};

export type Interactives = {
	name: string;
	image: Asset;
	event: string;
	coordinates: Point;
}

export type RegionType = {
	name: RegionName;
	asset: RegionAsset;
	lootboxesDetails?: LootboxDetails[];
	spawnPoint: Point;
	Teleporter: TeleporterDetails;
	Flag?: FlagMapDetails;
	Dungeon?: Point
	Interactives?: Interactives[];
};
