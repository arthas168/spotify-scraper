const Apify = require('apify');
const sleep = require("./utils")
const {
    USER_EMAIL,
    USER_PASSWORD,
    logInButtonSelector,
    songUrl,
    playButtonSelector,
    pathToBrowser,
    songLengthSelector
} = require("./utils/contants")


// TODO: Make selectors more generic
Apify.main(async () => {
    const requestQueue = await Apify.openRequestQueue();
    await requestQueue.addRequest({url: 'https://open.spotify.com/'});

    const crawler = new Apify.PuppeteerCrawler({
        requestQueue,
        launchPuppeteerOptions: {
            executablePath: pathToBrowser,
            ignoreDefaultArgs: "--mute-audio",
        },

        handlePageFunction: async ({request, page}) => {
            console.log(`Processing ${request.url}...`);

            const holdOnASecond = async () => {
                await page.waitFor(1000)
            }

            const findAndClick = async (selector) => {
                await page.waitFor(selector);
                await page.click(selector);
            }

            await findAndClick(logInButtonSelector);

            await page.waitFor("#login-username");

            await page.type('#login-username', USER_EMAIL);
            await page.type('#login-password', USER_PASSWORD);
            await holdOnASecond();

            await findAndClick("#login-button");
            await holdOnASecond();

            await page.goto(songUrl, {waitUntil: 'load'});
            await holdOnASecond();

            await findAndClick(playButtonSelector);
            await holdOnASecond();

            await page.waitFor(songLengthSelector);
            await holdOnASecond()
            const songLength = await page.$eval(
                songLengthSelector,
                (el => el.textContent)
            );
            await holdOnASecond();
            console.log("SONG LENGTH ", songLength)

            //TODO: set this to a more reasonable time limit
            await sleep(100000000);
        },

        handleFailedRequestFunction: async ({request}) => {
            console.log(`Request ${request.url} failed too many times`);
            await Apify.pushData({
                '#debug': Apify.utils.createRequestDebugInfo(request),
            });
        },
    });
    await crawler.run();
});