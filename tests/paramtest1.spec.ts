//! Parameterization or Data Driven 
/* 
1. Means we can pass the parameters to the test and the test will 
execute multiple times with different number of inputs or
different sets of data .

2. Test is same , Test steps are same ,but we are repeating the same test 
multiple times with multiple sets of data which is also called as data driven. 
*/

//! Default Parametrization 
/* 
1. We are going to specify the data in the test itlsef and later on we will 
create data in the external files , we can ue JSON , CSV, Excel 

2. When the data is very huge then we go for external files , like JSON,CSV and Excel.

3. Most of the times we go with JSON , becuase in TS support tools , there is
   in-built support for JSON.

4. No need to install any 3rd party libraries , so in built support is there with JSON 
 so most of the time we prefer JSON as the test data file. 

5. 1st priority goes to    - JSON Files 
   2nd priority goes to    - CSV Files 
   3rd priority - goes to  - Excel Files 


*/

import {test,expect} from "@playwright/test"
//testdata 
const searchItems :string[] = ['laptop','Gift card','Smartphone']

for(const item of searchItems)
{  
  test(`Search Test for ${item}`,async({page})=>{
    await page.goto("https://demowebshop.tricentis.com/")
    await page.locator('input#small-searchterms').fill(item)
    await page.locator('input[value="Search"]').click()
    //await expect.soft(page.locator('h2 a').nth(0)).toContainText("item",{ignoreCase:true});
}) 
}

// using for... of loop 



//! I want to run the same test , multiple number of times, with different number of keywords 
/* To do that I will maintain the search keywords in an array 

1. Whenever we want to run the test with multiple parameters we have to run the
test inside the loop.

2. Either we can use :
a. traditional for loop 
b. for ...of loop 
c. forEach() - function 


*/

//! Using forEach function()

