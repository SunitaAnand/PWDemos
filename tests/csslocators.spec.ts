//! CSS Locators 
/* CSS - Cascading Style Sheet 

html - to create static web pages 
+
js - to add dynamicity to the webpage 
(like click on buttons , links , fill etc)
+
css - to add design and creativity to web page  
*/

//! We have 2 types of CSS Locators 
// 1. Absolute CSS Locator 
// 2. Relative CSS Locator

//! We can create css using :
// 1. tag with id 
// 2. tag and class 
// 3. tag and any other attribute 
// 4. tag with class and attribute

// ! 1. tag with id : # - representing an id 
// tag#id

//! 2. tag and class : . - representing a class 
//tag.class

//! 3. tag and any other attribute 
// tag[attribute = value]

//! 4. tag with class and attribute
// tag.class[attribute = value]

// ! Note : In all these combinations tag is optional 
// Even if you dont specify tag it is ok.

// OR 

/*
1. #id
2. .class
3. [attribute = value]
4. .class[attribute = value]

page.locator(css/xpath)

*/

//! tag#id 

import{test,expect} from "@playwright/test"

test('Verify CSS Locatorss',async({page})=>{
await page.goto("https://demowebshop.tricentis.com/")
await page.locator('input#small-searchterms').fill("T-Shirts")

//! tag.class
await page.locator('input.search-box-text').fill("leg chain")

//! tag[attribute=value]
await page.locator('input[id="small-searchterms"]').fill("I-Phone")


//! tag.class[attribute=value]
await page.locator('input.search-box-text[id="small-searchterms"]').fill("BhagwadGita")

})