# OdishaTourismApi

<h1><b>Puppeteerjs</b></h1>
https://github.com/puppeteer/puppeteer#readme

<h1><b>For api</b></h1>
https://odishatourism.herokuapp.com/tourismApi
<br>
<h1> Deployment</h1>
[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
<br><br>
<h1>Demo code for web scarping</h1>
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
