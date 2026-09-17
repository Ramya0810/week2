import{test}from "@playwright/test"

test("Create Lead in salesforce",async({page})=>
{

await page.goto("https://leafground.com/checkbox.xhtml");

await page.locator("//input[@id='j_idt87:j_idt89_input']").check();

await page.waitForTimeout(5000)



})