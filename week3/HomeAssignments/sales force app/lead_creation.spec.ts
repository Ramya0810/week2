

import{test}from "@playwright/test"

test("sales force",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in");
    
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com");

    await page.locator("//input[@id='Login']").click();

    await page.locator("//input[@id='password']").fill("TestLeaf@2025");


    await page.locator("//input[@id='Login']").click();

    await page.locator("//div[@class='slds-icon-waffle']").click();

    await page.getByRole("button",{name:"View All Applications"}).click();

    await page.locator("//p[text()='Sales']//parent::span").click();

    await page.getByRole("button",{name:"Leads List"}).click();

    await page.getByRole("menuitem",{name:"New Lead"}).click();

    await page.getByRole("combobox",{name:"Salutation"}).click();

    await page.locator("//span[@title='Mr.']").click();

    await page.getByPlaceholder("Last Name").fill("Sudha");

    await page.getByRole("textbox",{name:"Company"}).fill("TestLeaf");

    await page.locator("//button[@name='SaveEdit']").click();

    await page.waitForTimeout(5000);
})
