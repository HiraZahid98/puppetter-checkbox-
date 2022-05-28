//Puppeteer library
const pt= require('puppeteer')
async function dropDownHandle(){
   //launch browser in headless mode
   const browser = await pt.launch()
   //browser new page
   const page = await browser.newPage()
   //launch URL
   await page.goto('https://www.tutorialspoint.com/tutor_connect/index.php')
   //identify dropdown then select an option by value
   const f = await page.$('[name="selType"]')
   await f.select("subject")
   //wait for sometime
   await page.waitForTimeout(4000)
   //get value selected
   const v = await (await f.getProperty("value")).jsonValue()
   console.log(v)
}
dropDownHandle()
