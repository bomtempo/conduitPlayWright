import { Page,expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async go() {
        await this.page.goto('https://react-redux.realworld.io/#/login?_k=mob0ob');
        await expect(this.page).toHaveURL('https://react-redux.realworld.io/#/login?_k=mob0ob');
       
        const title = this.page.locator('a[class="navbar-brand"]');
        await expect(title).toHaveText('conduit');
        
        const subTitle = this.page.locator('h1[class="text-xs-center"]')
        await expect(subTitle).toHaveText('Sign In');
    }

    async sigIn(user: string, password: string) {
        await this.page.getByPlaceholder('Email').click();
        await this.page.getByPlaceholder('Email').fill(user);  
        await this.page.getByPlaceholder('Email').press('Tab');  
        await this.page.getByPlaceholder('Password').fill(password);

        await this.page.getByRole('button', { name: 'Sign in' }).click();
    }

    async invalidEmailorPassword(target: string) {
        const emailInvalid = this.page.locator('ul[class="error-messages"]')
        await expect(emailInvalid).toHaveText(target);
    }

    async validaLogin(target: string) {
        const emailInvalid = this.page.locator('a[href="#@alanvoigt"]')
        await expect(emailInvalid).toHaveText(target);
    }

}