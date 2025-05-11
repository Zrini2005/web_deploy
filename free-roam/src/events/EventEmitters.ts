const Events = {
	LOOTBOX_OPEN: "LOOTBOX_OPEN", // event sent by phaser when a lootbox is opened
	LOOTBOX_OPENED: "LOOTBOX_OPENED", // event sent by the server to confirm that a lootbox has been opened
	START_MATCHMAKING: "START_MATCHMAKING", // event sent by phaser to start matchmaking
	RESUME_GAME: "RESUME_GAME", // event sent by react to resume the game
	PAUSE_GAME: "PAUSE_GAME", // event sent by react to pause the game
	CHANGE_CHARACTER: "CHANGE_CHARACTER", // event sent by react after character selection
	MATCH_ENDED: "MATCH_ENDED", // event sent by the react app when the match ends
	OPEN_DASHBOARD: "OPEN_DASHBOARD", // event sent by the react app when the dashboard is opened
	CLOSE_DASHBOARD: "CLOSE_DASHBOARD", // event sent by the react app when the dashboard is closed
	TELEPORT: "TELEPORT", // event sent by phaser to trigger teleport menu open
	TELEPORT_ANIM: "TELEPORT_ANIM", // event sent by react after destination has been selected, to play teleport animation
	TELEPORTED: "TELEPORTED", // event sent by phaser, to trigger the teleportation
	ENTER_DUNGEON: "ENTER_DUNGEON",// event sent by phaser to enter dungeon

	OPEN_MARKET: "OPEN_MARKET",// event sent by phaser, to open market menu
	OPEN_LEADERBOARD: "OPEN_LEADERBOARD",// event sent by phaser to open leaderboard
	OPEN_DAILY_LEADERBOARD: "OPEN_DAILY_LEADERBOARD",// event sent by phaser to open daily leaderboard
};

const eventEmitter = new Phaser.Events.EventEmitter();

export { Events, eventEmitter };
