    import{test,expect} from "@playwright/test"

    test('Bootstrap Hidden dropdown',async({page})=>{

        //? Login steps
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login") 
    await page.locator("[name='username']").fill('Admin')
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()

    //? Click on PIM
    await page.locator('[href="/web/index.php/pim/viewPimModule"]').click()

    //?Select the "Job Title dropdown"
    await page.locator("form i").nth(2).click()
    await page.waitForTimeout(3000)

    //? Capture all the options from dropdown and count
    const options = await page.locator('[role="option"]').count()
    console.log("Number of options in a dropdown",options) 
    })