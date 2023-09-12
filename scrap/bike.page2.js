const puppeteer = require("puppeteer");
const fs = require("fs");
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://www.zigwheels.com/newbikes/best-bikes-in-india");

  const data = await page.evaluate(() => {
    const tds = Array.from(document.querySelectorAll("table tr td"));
    let data = [];
    for (let i = 0; i < tds.length; i += 3) {
      data.push({
        name: tds[i].innerText,
        price: tds[i + 1].innerText,
        milage: tds[i + 2].innerText,
      });
    }
    return data;
  });
  const csvData = data
    .map((item) => `${item.name},${item.price},${item.views}`)
    .join("\n");
  fs.writeFile(
    "scraped_data_bike_page2.json",
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Data saved to scraped_data.json");
    }
  );
  fs.writeFile(
    "scraped_data_bike_page2.csv",
    `Name,Price,Views\n${csvData}`,
    (err) => {
      if (err) throw err;
      console.log("Data saved to scraped_data.csv");
    }
  );

  await browser.close();
})();
