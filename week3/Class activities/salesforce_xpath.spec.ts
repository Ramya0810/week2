import{test}from "@playwright/test"

test("sales force",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in");
    
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com");

    await page.locator("//input[@id='Login']").click();

    await page.locator("//input[@id='password']").fill("TestLeaf@2025");


    await page.locator("//input[@id='Login']").click();



    await page.waitForTimeout(5000);
})


//https://login.salesforce.com/?locale=in
//Sample credentials :
//Username:dilipkumar.rajendran@testleaf.com
//Password: TestLeaf@2025