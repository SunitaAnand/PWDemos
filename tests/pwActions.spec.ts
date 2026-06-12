import{test,expect} from "@playwright/test"

test('Test Input Actions',async({page})=>{

    //! text box 
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("input#name").fill("John Kenedy")    

    //!radio button 
    await page.locator('input#male').check()

    //! select specific check box (Sunday) using getByLabel and assert 
    /*     let checkbox = page.getByLabel('Sunday')
        await(checkbox).check()
        await expect(checkbox).toBeChecked() */
 
    //! Select all check boxes and assert each is checked 
    let days :string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let check_boxes = days.map(index => page.getByLabel(index))
    expect(check_boxes.length).toBe(7)
    
    //! Select all checkboxes and assert each is checked 
    /* for(let checkbox of check_boxes)  //checkbox is a variable 
    { 
        await checkbox.check()
    } */
    //! uncheck last 3 checkboxes and assert
    for (let checkbox of check_boxes.slice(-3))
    {
        await checkbox.check()
        await expect(checkbox).toBeChecked()
    }

  // ! Toggle checkboxes : If checked , uncheck
                    //!  : if unchecked , check 
                    //!  : Assert state filled 





  //! Randomly select checkboxes - select check boxes by index
  //! (1,3,6) and assert 



  //! select the check box based on the label 

  

  //! Radiobuttons 

})
