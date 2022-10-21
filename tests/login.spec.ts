import { LoginPage } from './../pages/login-page';
import { test } from '@playwright/test';

let loginPage: LoginPage

test.beforeEach(async ({page}) => {
  loginPage = new LoginPage(page)
});

test('Email ou Password Invalido', async ({  }) => {
  await loginPage.go();
  await loginPage.sigIn('alex.test@test.com', '123456')
  await loginPage.invalidEmailorPassword('email or password is invalid')

});
test('Email Obrigatório', async ({ }) => {
  await loginPage.go();
  await loginPage.sigIn('', '123456')
  await loginPage.invalidEmailorPassword("email can't be blank")

});
test('Password Obrigatório', async ({  }) => {
  await loginPage.go();
  await loginPage.sigIn('alex.test@test.com', '')
  await loginPage.invalidEmailorPassword("password can't be blank")

});
test('Login Sucesso', async ({  }) => {
  await loginPage.go();
  await loginPage.sigIn('alanvoigt@yahoo.com.br', 'test123')
  await loginPage.validaLogin('alanvoigt')

});
