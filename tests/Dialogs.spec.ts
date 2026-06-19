//! Handling Dialogs and Frames /IFarmes 

/*
In Playwright dialogs and alert windows are the same

When we are performing actios on the web page we get alerts or dialog boxes , 
we need to handle them , unless and until we dont handle them we will not be 
able to proceed with our further actions.

1. Playwright will automatically handle the dialogs . 
2. Playwright has an inbuilt mechanism to automatially close it.
3. By default we dont need to handle or manage the alerts or dialog boxes.

! Note :
4. If we want to perform certain validations on the alerts then we have to 
capture them called as event handlers and perform actions.

! Note : In selenium we must and shoudl handle it , 
! but in playwright it automatically closes it.
*/
/*
Playwright can interact with the web page dialogs such as :
1. alert()
2. confirm()
3. prompt()


! By default dialogs are auto dismissed by playwright 
! so you dont hav to handle them

Dialog has got 2 methods:
1. dialog.accept()
2.dialog.dismiss()

! Note: By default dialog.dismiss() works 
*/ 


//!Also , We have to register a dialog handler before the action that 
//! triggers the dialog to either dialog.accept() or dialog.dismiss()


/* 
page.on('dialog',dialog =>dialog.accept())
await pageXOffset.getByRole('button').click()
 */


import{test,expect} from "@playwright/test"


//! Simple Alerts - does not interact with our work execution 
// By default it gets dismissed 

test("Simple Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
await page.locator('#alertBtn').click()  //opens dialog
await page.waitForTimeout(5000)

})

//? But still i want to capture this alert window in the run time 
//? and lets say I want to capture the message on the alert window


//! Enable Alert Handling
//! Register a Dialog Handler 

test("Dialog Validations",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//? Note : First always defien the alert , only then trigger the alert

//Define the alert 
page.on('dialog',(dialog) => {
    console.log("Dialog type is:",dialog.type()) //returns type of dialog
    expect(dialog.type()).toContain('alert')
    
    
    console.log("Dialog Text",dialog.message()) // returns message from the dialog
    expect(dialog.message()).toContain('I am an alert box!')
    dialog.accept()  //Arrow function 
}) 

    // Trigger the alert
    await page.locator('#alertBtn').click()

}) 


//! Confirmation Dialog

test("Confirmation Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//Define the alert 
page.on('dialog',(dialog) =>{

console.log("Dialog Type is :",dialog.type())
expect(dialog.type()).toContain("confirm")

console.log(dialog.message())
expect(dialog.message()).toContain('Press a button!')
//dialog.accept() // close a dialog by accepting
dialog.dismiss() // closes a dilaog by dismissing 

})

 // Trigger the alert 
await page.locator('#confirmBtn').click()
const text :string = await page.locator('#demo').innerText()
console.log("Output Text:",text)
await expect(page.locator('#demo')).toHaveText('You pressed Cancel!')
})


//! Prompt Dialog

test("Prompt Dialog",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

//  Define the alert 
page.on('dialog',(dialog)=>{
    console.log(dialog.type())
    expect(dialog.type()).toContain("prompt")

    console.log(dialog.message())
    expect(dialog.type()).toContain('Please enter your name:')

    expect(dialog.defaultValue()).toContain("Harry Porter")  
    //? defaultvalue() -> captures the default value what is already present in the given prompt

    dialog.accept("John")
})

 // Trigger the alert 
await page.locator('[id="promptBtn"]').click()
const txt1 :string = await page.locator('#demo').innerText()
console.log("Printed Text is:",txt1)
await expect(page.locator('#demo')).toHaveText('Hello John! How are you today?')


})