import{test}from "@playwright/test"

test("Create Lead",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");

    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa");

    await page.getByRole("button",{name:"Login"}).click();

    await page.getByRole("link",{name:"CRM/SFA"}).click();

    await page.getByRole("link",{name:"Leads"}).click();

    await page.getByRole("link",{name:"Create Lead"}).click();

    await page.locator("//input[@id='createLeadForm_companyName']").fill("Testleaf");

    await page.locator("//input[@id='createLeadForm_firstName']").fill("Ramya");

    await page.locator("//input[@id='createLeadForm_lastName']").fill("Marimuthu");

    await page.locator("//input[@id='createLeadForm_personalTitle']").fill("Ms");

    await page.locator("//input[@id='createLeadForm_generalProfTitle']").fill("CreateLead");

    await page.locator("//input[@id='createLeadForm_annualRevenue']").fill("100000");

    await page.locator("//input[@id='createLeadForm_departmentName']").fill("Finance");

    await page.locator("//input[@id='createLeadForm_primaryPhoneNumber']").fill("8761239898");

    await page.getByRole("button",{name:"Create Lead"}).click();


     await page.waitForTimeout(5000);
})