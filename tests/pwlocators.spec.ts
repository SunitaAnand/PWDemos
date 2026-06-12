//! Locators :

import{test,expect} from "@playwright/test"

test("Verify Playwright Locators",async({page})=>{

//! 1. page.getByAltText() -> used only for images 
//! alt is an image attribute 
//! <img alt>

/* To locate an element , usually image ,by its text alternative
identifies images(and similar elements) based on the alt attribute.
use this locator when your element supports alt text such as img area elements 
*/

await page.goto("https://www.amazon.in/")

const logo = page.getByAltText("miniTV")
await expect(logo).toBeVisible()

//! 2. page.getByText() 
//! text is a visible text attribute 

/* To find an element by the text it contains.
You can match by a substring ,exact string 
Locate by visible text 
Use this locator to find non intercative elements like div , span,p,etc
For intercative elements like button,a ,inout etc use role locators 
*/

//? Examples :
/* 
<p> Welcome </p>
<div> Hello World </div>
*/
const text = page.getByText("Revamp your home")
await expect(text).toBeVisible()

//! 3 . getByRole()
/*
Role Locators include :
buttons, checkboxes , headings, links , lists , tables
and many more and follow W3C specifications for ARIA role.

Prefer for intercative elements like : 
buttons, checkboxes , headings, links , lists , tables 

*/

await page.getByRole("link",{name : 'Gift Cards'}).click()

/* //! you can also use getByText()
await expect(page.getByRole("heading",{name :"Recommended popular audiobooks"})).toBeVisible()
 */

//! getByPalceHolder()
await page.getByPlaceholder("Search Amazon.in").fill("shoes")

}) 
//! 7. getByLabel()
/* We use getByLabel() - for form controls 

that is all the ui control elements in a form 

*/

test("Form Controls",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.getByLabel('Name').fill("Sunita Anand")
    await page.getByLabel('Email Id').fill("sunita@gmail.com")
})

