import{test}from "@playwright/test"

test("dropdown",async({page})=>
{

await page.goto("https://leafground.com/select.xhtml");

await page.locator("select.ui-selectonemenu").selectOption({value:"Playwright"});



await page.locator("//label[text()='Select Country']").click();

await page.getByRole("option", { name: "India" }).click();

await page.locator("//label[text()='Select City']").click();


await page.getByRole("option", { name: "Chennai" }).click();

await page.getByRole("button", { name: "Show Options" }).click();



await page.getByRole("option", {name:"JMeter"}).click();

await page.getByRole("option", {name:"Selenium WebDriver"}).click();

await page.locator("//label[text()='Select Language']").click();

await page.getByRole("option",{name:"Tamil"}).click();

await page.locator("//label[text()='Select Values']").click();

await page.getByRole("option", { name: "இரண்டு" }).click();
await page.waitForTimeout(5000);
})