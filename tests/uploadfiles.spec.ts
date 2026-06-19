//! 13th June 2026 

//! File Uploads 

// 1 . Single File Upload
// 2 . Multi File Upload


//! Single File Upload 
//! .setInputFiles()

import{test , expect} from "@playwright/test"

test("Single File Upload",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#singleFileInput").setInputFiles('Uploads/playWrightSyllabusForTypeScript.txt')
    await page.locator("//button[text()='Upload Single File']").click()
    const msg = await page.locator('#singleFileStatus').textContent()
    console.log(msg)
    expect(msg).toContain('Single file selected: playWrightSyllabusForTypeScript.txt, Size: 2380 bytes, Type: text/plain')
    console.log("Upload Successful.....")

    await page.waitForTimeout(5000)

})


test("Multiple Files Upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#multipleFilesInput").setInputFiles(["Uploads/playWrightSyllabusForTypeScript.txt","Uploads/Day18-Locators.pdf"])
    await page.locator("//button[text()='Upload Multiple Files']").click()
    let msg = await page.locator("#multipleFilesStatus").textContent()
    console.log(msg)
    expect(msg).toContain('playWrightSyllabusForTypeScript.txt, Size: 2380 bytes, Type: text/plain')
    expect(msg).toContain('Day18-Locators.pdf, Size: 3991642 bytes, Type: application/pdf')

})