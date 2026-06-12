import {test,expect} from "@playwright/test"


// fixture - global variable 
//? It is assessible throughout the project 
// page - is a fixture 
// browser - is a fixture 

test("Verify Page Title",async({page})=>{
await page.goto("https://www.saucedemo.com/")

let title = await page.title()
console.log("Title  : ",title)
await expect (page).toHaveTitle("Swag Labs")

})

test.only("To Get URL",async({page})=>{
 await page.goto("https://www.prokabaddi.com/teams")
 let URL = page.url()
 console.log("Uniform Resource Locator of the page is :" ,URL)
 await expect (page).toHaveURL("https://www.prokabaddi.com/teams")

})