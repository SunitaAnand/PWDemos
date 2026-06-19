//!13th June 2026 
//! Download Files
/*
1. File Download files is little bit tricky 
2. File Download file is basicaly an event.
3. We need to grab that event    
4. We have seen wait for event() for pop up and new page 
5. Similarly file download is also an event.
6. Here we need to wait for downlaod event 
*/


/* import{test,expect} from"@playwright/test"

test("Download text file",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")
await page.locator('[id="inputText"]').fill("Welcome") */
//await page.locator('[id="generateTxt"]').click()

//! when i click on this link it is triggerring an event
/*
1. We have to listen to that event ,if we just execute the click() we wont see the downloaded file , 
so before this click , we need to create an event.

2. Inorder to create an event and click on download link , to run both parallely 
use: page.waitForEvent()

*/

/* Download event is getting triggered 
 these two statements will work parallely ,
 but inorder to make them work synchronously , put them in a promise.all()

 Promise can be - 
 1. Fullfilled
 2. Pending 
 3. Rejected 

/*

/* await page.waitForEvent("download") // here it is waiting for the event 
await page.getByRole("button",{name :"Download Text File"}).click() */

/* Put these two statements inside Promise.all
 Put them as an array 
1st statement is the 1st array Element.
2nd statement is the 2nd array Element
*/


import { test, expect } from "@playwright/test"

test("Download text file", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html")

    await page.locator("#inputText").fill("Welcome")
    await page.locator("#generateTxt").click()

    // Start listening for download event before clicking
    const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator('#txtDownloadLink').click()
 
    ])

    // Save the file to custom path
    const downloadPath = "downloads/testfile.txt"

    await download.saveAs(downloadPath)

    console.log("File downloaded successfully")

    await page.waitForTimeout(5000)
})
