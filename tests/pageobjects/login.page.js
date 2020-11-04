import BasePage from '../helper/basepage';

class LoginPage extends BasePage {

  usernameTextBox = "#user-name";
  passwordTextBox = "#password";
  loginButton = "#login-button";

  enterUsername(username) {
    super.setValue(this.usernameTextBox, username);
  }

  enterPassword(password) {
    super.setValue(this.passwordTextBox, password);
  }

  clickOnLoginButton() {
    super.click(this.loginButton);
  }

}

export default new LoginPage();
