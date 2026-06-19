//!15th June 2026 
//------------------

//! DropDowns
//? 1. There are different types of dropdown we can see on the web pages
//? 2. We generally find static (select type ) of drop downs 


// ! Single - Select Drop Down 
//? Here we find select <> and option<> tags 

import {test,expect} from"@playwright/test"

test('Single Select Dropdown',async({page})=>{``
await page.goto("https://testautomationpractice.blogspot.com/")

//! 1) There are 4 - different ways to select option from dropdow 

//! 1st Approach - By using Visible Text 
await page.locator('#country').selectOption('China')


//! 2nd Approach - By using Value Attribute  
await page.locator('#country').selectOption({value:'uk'})


//! 3rd Approach - By using Label 
await page.locator('#country').selectOption({label:'India'})

//! 4th Approach - By using Index 
await page.locator('#country').selectOption({index:3})

await page.waitForTimeout(5000)


}) 

//! 2) Check number of options in the dropdown
//? #country>option - > than symbol is used for navigation 
//? #country option -> we can also use space 


test('Count dropdown options',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/") 

const dropdownOptions = await page.locator('#country>option').count()
console.log(dropdownOptions)

})

//!3) To check an option present in the dropdown  
test('To get text of dropdown options',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/") 

const dropdownText = (await page.locator('#country>option').allTextContents()).map(text=>text.trim())
console.log(dropdownText)

expect(dropdownText).toContain('Germany')

await page.waitForTimeout(5000) 

//! 16th June 2026

//!printing option from the dropdown 

for(const option of dropdownText)
{

    console.log(option)
}

await page.waitForTimeout(5000)  
    }) 
 