import { RegionName } from "../types.d";
declare const getImageURL: (image: string) => string;
declare const getCharacterSpriteURL: (character: string) => string;
declare const getAssetURL: (image: string) => string;
declare const getJoystickAsset: (image: string) => string;
declare function stringToRegionName(value: string): RegionName | undefined;
declare function regionNameToString(region: RegionName): string;
export { getImageURL, getCharacterSpriteURL, stringToRegionName, regionNameToString, getAssetURL, getJoystickAsset };
