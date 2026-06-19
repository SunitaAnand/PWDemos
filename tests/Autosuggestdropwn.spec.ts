//! BootStrap DropDowns 

//? If we dont have a select tag dropdown , then how we can handle them ?
//? We call them as BootStrap Dropdowns
//? The dropdowns are designed using bootstrap technology 
//? Developers use BootStarp technology to make the dropdown and many other elements in the application to look attractive 
//? There are no default methods present in playwright to select boot starp a, then how we can handle them ?


//! Note :

//! 1. Static Dropdown 
// ? select tag
// ? 1. Can be single select drop down 
// ? 2. or also it can be multiselect drop down   

//? Ex : https://testautomationpractice.blogspot.com/ 

//! 2. Dynamic or Autosuggest Dropdown 
//? Options keep changing dynamically
//? Also called as Bootstrap dropdown

// ? Ex: Flipkart Application , we type shoes , it shoes autsugesstions in tht drop down 

//! 3.Hidden DropDown 
//! This is a challenging way to inspect the drop down elements.

//? 1. In order to handle this challenge , there are certain tricks and strategies to follow
//? Also each time same techniques wont work in all of the places.

//? 2. When we try to inspect the hidden drop down elements , we first click the drop down 
//? and when we are trying to inspect  the html dom gets disappeared.

//? 3. Here the elements are there , the options are static , if we want to select those options we are not able to locate 
//? because we are not able to inspect , and we are not abel to capture them directly 

//?Ex : https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList

// ! Note :
//? In Modern applications , we dont see static dropdowns nowadays 
//? It is only dynamic or hidden dropdowns we are able to find.

//! Turn On Debugger option present in selectors hub


import {test,expect} from"@playwright/test"

test('Autosuggest dropdown',async({page})=>{

    await page.goto("https://www.flipkart.com/")
    await page.locator('input.[name="q"]').fill("smart")
    await page.waitForTimeout(5000)

    //! Get all the suggested options ->
    // ? 1. Ctrl +shift + P on DOM 
    // ? Type emulate focussed page
    
    
    //? 2. Or use Tools Debugger from selectors hub , 
    //? the options gets freezed and start inspecting them.


    const options = page.locator("ul>li")
    const count = await options.count()
    console.log("Number of suggested options",count)
})