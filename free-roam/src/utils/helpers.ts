import { RegionName } from "../types.d";
const getImageURL = (image: string) => {
	return `/assets/phaser/tilesets/${image}`;
}

const getCharacterSpriteURL = (character: string) => {
	return `/assets/phaser/characters/${character}`;
};

const getAssetURL = (image: string) => {
	return `/assets/phaser/assetSprites/${image}`;
}

const getJoystickAsset = (image: string) => {
	return `/assets/phaser/joystickAssets/${image}`;
}

function stringToRegionName(value: string): RegionName | undefined {
	switch (value) {
		case "CENTRAL":
			return RegionName.CENTRAL;
		default:
			return undefined; 
	}
}

function regionNameToString(region: RegionName): string {
	switch (region) {
		case RegionName.CENTRAL:
			return "CENTRAL";
	}
}

export { getImageURL, getCharacterSpriteURL, stringToRegionName, regionNameToString, getAssetURL, getJoystickAsset };
