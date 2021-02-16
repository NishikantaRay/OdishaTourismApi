# OdishaTourismApi

<h3>Puppeteerjs-https://github.com/puppeteer/puppeteer#readme</h3>

<h3>Host link-https://odishatourism.herokuapp.com/tourismApi</h3>

const puppeteer = require('puppeteer');

async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('link')
  let headtext = await page.$eval('#main-slider > div > div > div > h3', gd => gd.innerText);
   let imgsrc = await page.$$eval('#main-slider > div > div > img[src]', imgs => imgs.map(img => img.getAttribute('src')));
   let descp = await page.$eval('body > div:nth-child(1) > div.title-description.aem-GridColumn.aem-GridColumn--default--12 > div > div > div > div.col-12.paragraph.text# #-center.read-more-hide > p', gd => gd.innerText);
	# let array = [headtext, imgsrc[0], descp];
	 # console.log(array);
	 # await browser.close();
})();
