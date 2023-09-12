const puppeteer = require("puppeteer");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const url = "https://autos.maxabout.com/bikes/popular-bikes-chennai";
  await page.goto(url);

  const data = await page.evaluate(() => {
    const vehicles = Array.from(document.querySelectorAll(".veh-infobox"));
    return vehicles.map((vehicle) => {
      const name = vehicle.querySelector(".info a.bold").innerText.trim();
      const price = vehicle.querySelector(".price").innerText.trim();
      const views = vehicle.querySelector(".info").lastChild.textContent.trim();

      return {
        name,
        price,
        views,
      };
    });
  });

  const csvData = data
    .map((item) => `${item.name},${item.price},${item.views}`)
    .join("\n");
  fs.writeFile(
    "scraped_data_bike_page1.json",
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Data saved to scraped_data.json");
    }
  );
  fs.writeFile(
    "scraped_data_bike_page1.csv",
    `Name,Price,Views\n${csvData}`,
    (err) => {
      if (err) throw err;
      console.log("Data saved to scraped_data.csv");
    }
  );

  await browser.close();
})();
