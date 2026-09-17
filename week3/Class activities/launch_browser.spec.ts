import{chromium, test}from "@playwright/test"

test("launch Browser",async()=>{
    let browser=await chromium.launch();

    let context=await browser.newContext();

    let page= await context.newPage();

    await page.goto("https://www.amazon.com/");
    
})