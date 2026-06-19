import{Page,Locator} from '@playwright/test'

class LoginPage
{

//! Define the variables - private and readonly

private readonly page:Page
private readonly loginlink:Locator
private readonly usernameInput:Locator
private readonly passwordInput :Locator
private readonly loginButton :Locator

//! constructor

constructor(page:Page)
{
    this.page = page
    this.loginlink = this.page.locator('#login2')
    this.usernameInput = this.page.locator('#loginusername')
    this.passwordInput = this.page.locator('#loginpassword')
    this.loginButton = this.page.locator('#loginpassword')

}

//! action methods
async clickLoginLink():Promise<void>
{
    await this.loginlink.click()

}


async enterUserName(username :string) : Promise<void>
{
    this.usernameInput.clear()
    this.usernameInput.fill(username)  
}

async enterPassword(password:string) :Promise<void>
{
    this.passwordInput.clear()
    this.passwordInput.fill(password)

}
async clickLoginButton() : Promise<void>
{
    this.loginButton.click()
}


async performLogin(username:string,password:string)
{
    await this.clickLoginLink()
    await this.enterUserName(username)
    await this.enterPassword(password)
    await this.clickLoginButton()
}
}