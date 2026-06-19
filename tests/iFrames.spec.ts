//! iFrames 
/*
Some times we can embed external pages in the web pages without disturbing the existing page we can just embed some externla page 
in the current page which is basically called as iFrame or inline Frame.

! An iFrame (short for "inline frame"):
1. Is an HTML element that allows you to embed another HTML document within the current document.
2. Iframes are commonly used to embed external content such as videos , or other web pages(as seen here ) into a web page with parent dom.
*/


import{test,expect} from "@playwright/test"

 test("Frames demo",async({page})=>{
 await page.goto("https://ui.vision/demo/webtest/frames/frame_3")

 //! Total number of frames present on the webpage
 const frames = page.frames()
 console.log("Number of frames:",frames.length)

  })



 //! How to interact with elements that are present inside the frames 

test("Frame - Locator",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    const frames_page = page.frameLocator('#courses-iframe')
    await frames_page.locator("li a[href='lifetime-access']:visible").click()

})

 


