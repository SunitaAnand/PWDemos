import{test,expect,chromium} from"@playwright/test"

//?We are not writing any fixtures inside async function becasuse I am
//? going to create my own fixtures.
test('Handle Tabs',async()=>{   
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const Parentpage   = await context.newPage()

    await Parentpage.goto("https://testautomationpractice.blogspot.com/")

    //? Add an additional step : waitforEvent('page') before opening a new page.

    //! Note : until the click() event is fulfilled , wait for Event() cannot be fulfilled 
    //? Still waitforEvent() will be in pending state 
/* 
    context.waitForEvent('page')  // pending ,fulfilled or rejected 
    await Parentpage.locator("//button[text() ='New Tab']").click() // Opens a new tab/new page */

//! Note :1) if we put waitforEvent() AFTER the click() method is a problem:
//? that means the event has already occured which is a click event,then what is the use of waitforEvent() for capturing the click event
//? as it has already occured.

/* 
    await Parentpage.locator("//button[text() ='New Tab']").click() // Opens a new tab/new page
     context.waitForEvent('page')  // pending ,fulfilled or rejected  */


//! Note : if we put waitforEvent() BEFORE the click() method is also a problem:
//? Promise(fullfilled , pendin or rejected) will still be in pending state because until click() method is not triggerred 
//? how can waitforEvent() wait for the new tab or page to be oepned and wait for it.
/* 
 context.waitForEvent('page')  // pending ,fulfilled or rejected 
    await Parentpage.locator("//button[text() ='New Tab']").click() // Opens a new tab/new page */

//! --------------Both the cases it is a problem -----------------
//? 1. Now we need to do , we need to execute these two statements parallely.
//? 2. At the same time we have to execute both the statements.
//? 3. That measn event should be triggered exactly at the same time of waiting for the event 


//!In order to overcome this asynchronization probelem 
//! Use promise.all()
//? 1. We need to use the Promise.all() method so that syncronization happens 

//? 2. Pass both statements as an array
//? 3. Here each statemnt will return a promise and this becomes an array of promise 
//? 4. Here Promise.all() will wait till both the statements are successfully completed.
//? 5. Put await in front of Promise.all()
//? 6. What will promise.all() return?
//? Ans : It will return the Promise of the New page, which we call it as a child page.This also is an array.



/* await Promise.all([context.waitForEvent('page') , await Parentpage.locator("//button[text() ='New Tab']").click() ])
})
 */

const [childPage] = await Promise.all([context.waitForEvent('page') , await Parentpage.locator("//button[text() ='New Tab']").click() ]) 


//! Approach 1):
//! Switch between pages and get titles

const pages = context.pages() //return number of pages created as an array
console.log("Number of pages created:",pages.length)

//pages[0]; //returns the first page 
console.log("Title of the parent page:",await pages[0].title()) // returns the title of the first(Parent) page


console.log("Title of the Child Page",await pages[1].title()) // returns the title of the second(Child) page


//! Approach 2)

console.log("Title of the parent page:",await Parentpage.title()) // returns the title of the first(Parent) page


console.log("Title of the Child Page",await childPage.title()) // returns the title of the second(Child) page
})