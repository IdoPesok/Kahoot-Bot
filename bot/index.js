const puppeteer = require("puppeteer");

var bot = {}

bot.takeScreenshotOfWebsite = async function(url, websiteName) {
	const browser = await puppeteer.launch({
		headless: false
	});
	const page = await browser.newPage();

	await page.goto(url);
	await page.screenshot({ path: 'screenshots/' + websiteName + '.png' });

	browser.close();
}


bot.kahootBot = async function(pin, nickname) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();


	const pinSelector = "#inputSession"
	const enterSelector = "#mainView > div > div.vertical-alignment-wrapper > div.vertical-alignment-wrapper__center > div > form > button"
	const nicknameSelector = "#username"
	const playSelector = "#mainView > div > div.vertical-alignment-wrapper > div.vertical-alignment-wrapper__center > div > form > button"


	await page.goto("https://kahoot.it/");

	await page.click(pinSelector)
	await page.keyboard.type(pin)

	await page.click(enterSelector)

	await page.waitForNavigation()

	await page.click(nicknameSelector)
	await page.keyboard.type(nickname)

	await page.click(playSelector)

	browser.close()
}


module.exports = bot
