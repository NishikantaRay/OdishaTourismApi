const puppeteer = require("puppeteer");
const fs = require("fs");
let allData = [];
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const baseUrl = "https://autos.maxabout.com/bikes/popular-bikes-india/page-";
  let currentPage = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const url = `${baseUrl}${currentPage}`;
    await page.goto(url);
    try {
      const data = await page.evaluate(() => {
        const vehicles = Array.from(document.querySelectorAll(".veh-infobox"));

        return vehicles.map((vehicle) => {
          const name = vehicle.querySelector(".info a.bold").innerText.trim();
          const price = vehicle.querySelector(".price").innerText.trim();
          const views = vehicle
            .querySelector(".info")
            .lastChild.textContent.trim();

          return {
            name,
            price,
            views,
          };
        });
      });

      allData = allData.concat(data);
    } catch (error) {
      console.log(error);
    }

    const nextPage = await page.$("#pager-right a");
    if (nextPage) {
      currentPage++;
      await nextPage.click();
    } else {
      hasNextPage = false;
    }
  }

  const csvData = allData
    .map((item) => `${item.name},${item.price},${item.views}`)
    .join("\n");
  fs.writeFile(
    "scraped_data_new1.json",
    JSON.stringify(allData, null, 2),
    (err) => {
      if (err) throw err;
      console.log("Data saved to scraped_data.json");
    }
  );
  fs.writeFile("scraped_data.csv", `Name,Price,Views\n${csvData}`, (err) => {
    if (err) throw err;
    console.log("Data saved to scraped_data.csv");
  });
  await browser.close();
})();
