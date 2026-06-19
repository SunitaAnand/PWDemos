import{test,expect} from"@playwright/test"

//?We are not writing any fixtures inside async function becasuse I am
//? going to create my own fixtures.

 //! Approach 1 ): For Authenticated pop ups we need to pass username and password in the url itself

test('Authenticated Pop Ups',async({browser})=>{   

    const context = await browser.newContext()
    const page   = await context.newPage()


    //? Syntax:
    
    // - "https://the-internet.herokuapp.com/basic_auth"
    // - >"http://username:password@the-internet.herokuapp.com/basic_auth"

    //await page.goto("https://the-internet.herokuapp.com/basic_auth")
    
    await page.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth")
    
    await expect(page.locator('text=Congratulations')).toBeVisible()
    await page.waitForLoadState()
})


//! Approach 2 ) : Pass the login along with browser context 

test.only('Authenticated Pop-Ups',async({browser})=>{   

    const context = await browser.newContext({httpCredentials:{username:'admin',password:'admin'}})
    const page   = await context.newPage()
await page.goto("https://the-internet.herokuapp.com/basic_auth") 
 await page.waitForLoadState() 
})