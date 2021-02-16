# OdishaTourismApi

<h3><b>Puppeteerjs</b></h3>
https://github.com/puppeteer/puppeteer#readme

<h3><b>For api</b></h3>
https://odishatourism.herokuapp.com/tourismApi
<br><br>
const puppeteer = require('puppeteer');
<br>
<p>async () => {
    <br>const browser = await puppeteer.launch();
    <br>const page = await browser.newPage();
    <br>await page.goto('link')
  <br>let headtext = await page.$eval('#main-slider > div > div > div > h3', gd => gd.innerText);
   <br>let imgsrc = await page.$$eval('#main-slider > div > div > img[src]', imgs => imgs.map(img => img.getAttribute('src')));
   <br>let descp = await page.$eval('body > div:nth-child(1) > div.title-description.aem-GridColumn.aem-GridColumn--default--12 > div > div > div > div.col-12.paragraph.text# #-center.read-more-hide > p', gd => gd.innerText);
	<br>let array = [headtext, imgsrc[0], descp];
	 <br>console.log(array);
	 <br>await browser.close();
<br>})();</p>
