module.exports = {
    // TODO: move to .env file
    // credentials
    USER_EMAIL: "YOUR EMAIL",
    USER_PASSWORD: "YOUR PASSWORD",

    // selectors
    logInButtonSelector:
        "#main > div > div.Root__top-container > div.Root__top-bar > header > div:nth-child(4) > button._3f37264be67c8f40fa9f76449afdb4bd-scss._1f2f8feb807c94d2a0a7737b433e19a8-scss",
    songUrl: "https://open.spotify.com/album/0dYHTESEegNj0dkIFGWy2d?highlight=spotify:track:0hAIs32U2SmJcXymlcyF8h",
    playButtonSelector: "#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div > div.os-padding > div > div > div.main-view-container__scroll-node-child > section > div.f39dd6caa689537bffdfc875c3f33d08-scss.contentSpacing > div > button._8e7d398e09c25b24232d92aac8a15a81-scss.e8b2fe03d4e4726484b879ed8ff6f096-scss",
    songLengthSelector: "#main > div > div.Root__top-container > div.Root__main-view > div.main-view-container > div > div.os-padding > div > div > div.main-view-container__scroll-node-child > section > div:nth-child(4) > div > div.c27f49a483c85a5b88b3f37fb918e497-scss > div:nth-child(2) > div:nth-child(1) > div > div > div.b9f411c6b990949776c8edf3daeb26ad-scss > div.ec1b5762556429ac3aeedbae72433491-scss",

    // paths
    pathToBrowser: "/usr/bin/google-chrome-stable",
}