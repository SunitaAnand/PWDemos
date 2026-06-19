//! Multiselect DropDowns
 import{test,expect} from"@playwright/test"

 test('MultiSelect Dropdowns',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//! 1) There are 4 - different ways to select option from dropdow 

//! 1. By Visible Text()
//? To Select only one option 
await page.locator('#colors').selectOption('Red')

//? To select multiple options 
await page.locator('#colors').selectOption(['Red','Blue','Green'])

//! 2.Using Value Attribute 

await page.locator('#colors').selectOption(['red','yellow'])

//! 3.Using label attribute 
await page.locator('#colors').selectOption([{label:'Yellow'},{label:'Green'}])


//! 4. Using index
await page.locator('#colors').selectOption([{index:0},{index:3}])
 })

 //! To count the number of elements in the dropdown 

test('To Count Dropdowns',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/") 
 const dropoptions =  await page.locator('#colors > option').count()
 console.log(dropoptions)
})


//! To check an option present in the drop down 
test.only('Check Dropdown Value',async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/") 
const dropoptionsvalue =  (await page.locator('#colors>option').allTextContents()).map(text =>text.trim())
console.log(dropoptionsvalue)
await expect (page.locator('#colors')).toContainText('Green')

await page.waitForTimeout(5000)



//! to print the dropdown values 

for(const options of dropoptionsvalue)
{
    console.log(options)
}

})