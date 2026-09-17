import{test}from "@playwright/test"

test("launch Browser",async({page})=>{

    await page.goto("https://leafground.com/input.xhtml");
    
    await page.getByPlaceholder("Babu Manickam").fill("Ramya");

    await page.waitForTimeout(5000);
})