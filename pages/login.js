class Login {
  constructor(page) {
    this.page = page;
    this.url = '/login';
    this.emailInput = page.locator('[data-qa="login-email"]');
    this.passwordInput = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]')
  }
    async goto() {
        await this.page.goto(this.url);
    }

  async fillLoginFLoginFrom(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }
  async logInWithCredentials(email, password) {
    await this.fillLoginFLoginFrom(email, password);
    await this.clickLoginButton();
}
}
 module.exports = { Login };