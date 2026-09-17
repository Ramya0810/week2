import{test}from "@playwright/test"

test("launch Browser",async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");

     await page.locator("//input[@name='PASSWORD']");

     await page.waitForTimeout(5000);
})