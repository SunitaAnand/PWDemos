import{test, expect} from"@playwright/test"

//! How to read data from JSON
// As we are dealing with an external file we have to import a module called as fs module 


//! fs is a built in module in ts and js from tht we are importing fs
// fs is required to store a file 
/* //import fs from 'fs';
import * as fs from 'fs';  */

//! Reading the data from json 

// this statement will actually return the login data from the login file  
/* const jsonPath = "testdata/data.json";
const loginData  = JSON.parse(fs.readFileSync(jsonPath,'utf-8')); */

import loginData from '../testdata/data.json';


test.describe('Login data driven test',()=>{
      for (const { email, password, validity } of loginData) { 

    test(`Login Test for ${email} and ${password}`,async({page})=>{
        

    await page.goto('https://demowebshop.tricentis.com/login');
    
                // Fill login form
                await page.locator('#Email').fill(email);
                await page.locator('#Password').fill(password);
                await page.locator('input[value="Log in"]').click();
    
                if (validity.toLowerCase() === 'valid') 
                    {
                        // Assert logout link is visible - indicates successful login
                        const logoutLink = page.locator('a[href="/logout"]');
                        await expect(logoutLink).toBeVisible({ timeout: 5000 });
    
                    } 
                else 
                    {
                        // Assert error message is visible
                        const errorMessage = page.locator('.validation-summary-errors');
                        await expect(errorMessage).toBeVisible({ timeout: 5000 });
    
                    // Assert user is still on the login page
                    await expect(page).toHaveURL('https://demowebshop.tricentis.com/login');
                    }
                
            })
        }
    })
    

        
        
        
        






