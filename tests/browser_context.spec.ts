//! 1)Browser 
//--------------

//? Browser is having context 
//? Context iis having pages
//? Palywright supports 3 browsers :

//! 1. Chromium (Chrome + Edge)
//! 2. Firefox
//! 3. Webkit

//! 2)Context
//-----------
//? 1. We can create multiple user contexts 

//? 2. We can have multiple contexts for multiple users /apps
//? for the same browser

//? 3. Contexts provide a way to operate multiple independent 
//? browser sessions.


//!3) page
//? A page can be a :
//? 1. Tab
//? 2. Window 
//? 3. Pop up 

import{test,expect,Page,chromium} from"@playwright/test"
test('Browser-Context-Demo',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

})


test('Browser-Context-Demo1',async({context})=>{
const page = await context.newPage()
await page.goto("https://demowebshop.tricentis.com/customer/addressadd")
})



test('Browser-Context-Demo2',async({browser})=>{
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://demowebshop.tricentis.com/customer/addressadd")
})


test('Browser-Context-Demo3',async({})=>{
const browser = await chromium.launch()
const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://demowebshop.tricentis.com/customer/addressadd")
})


//! To Create Multiple pages for the same context

test('Browser-Context-Demo4',async({})=>{

const browser = await chromium.launch() // Create Browser
const context = await browser.newContext()  // Create Context

//Create Multiple Pages for the same context
const page1 = await context.newPage() //   Create Page1
const page2 = await context.newPage() //   Create Page2

// To get the number of pages created for the same context 
console.log("Number of Pages Created for the same context : " + context.pages().length) 

await page1.goto("https://playwright.dev/")
 
await page2.goto("https://www.google.com/")


})
