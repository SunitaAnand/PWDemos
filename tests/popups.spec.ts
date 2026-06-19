import { test,expect } from "@playwright/test";

test('Handle Pop Ups',async({browser})=>{

    const context = await browser.newContext()
    const page    = await context.newPage()

    await page.goto('https://testautomationpractice.blogspot.com/')


    //!Multiple Pop ups

    await Promise.all([page.waitForEvent('popup'),page.locator('[id="PopUp"]').click()])

    const allpopupwindows = context.pages()
    console.log("Number of pages/Windows",allpopupwindows.length)

    console.log(allpopupwindows[0].url())
    
    console.log(allpopupwindows[1].url())

})



