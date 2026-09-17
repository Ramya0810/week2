
import{test}from "@playwright/test"

test("sales force",async({page})=>{

    await page.goto("https://login.salesforce.com/?locale=in");
    
    await page.locator("//input[@id='username']").fill("dilipkumar.rajendran@testleaf.com");

    await page.locator("//input[@id='Login']").click();

    await page.locator("//input[@id='password']").fill("TestLeaf@2025");


    await page.locator("//input[@id='Login']").click();

    await page.locator("//div[@class='slds-icon-waffle']").click();

    await page.getByRole("button",{name:"View All Applications"}).click();

    await page.locator("//p[text()='Individuals']").click();

    await page.getByRole("searchbox",{name:"Search this list.."}).fill("Sudha");

    await page.keyboard.press('Enter');

    await page.locator("//span[text()='Sudha']").click();

    await page.locator("//div[@title='Edit']").click();

    await page.getByRole("button",{name:"Salutation --None--"}).click();

    await page.locator("//a[@title='Mr.']").click();


    await page.getByRole("textbox",{name:"First Name"}).fill("Ramya");


    await page.locator("//span[text()='Save']").click();


await page.waitForTimeout(5000);
})