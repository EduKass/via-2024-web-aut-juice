import { BasePage } from "../pageObjects/BasePage";

export class LoginPage extends BasePage {
  static get url() {
    return "/#/login";
  }

  static get elementName() {
    return cy.get("[class='mat-button-wrapper']");
  }
  static get clickLogin(){
    return cy.get("[id='navbarLoginButton']");
  }
  static get enterEmail(){
    return cy.get("[id='email']");
  }
  static get enterPassword(){
    return cy.get("[id='password']");
  }
  static get pressLoginEnteredDetails(){
    return cy.get("[class='mat-button-wrapper']").contains("Log in");
  }
  static get checkUserName(){
    return cy.get("[tabindex='0']");
  }
  static get newCustomer(){
    return cy.get("[id='newCustomerLink']");
  }
  static generateEmail(){
    var randomNumberInRange = Math.random() * 100;
    var roundedRandomNumber = Math.round(randomNumberInRange);
    var email = "email_" + roundedRandomNumber + "@ebox.com";
    return email;
  }
  static get enterEmailRegistration(){
    return cy.get("[id='emailControl']");
  }
  static get enterPasswordRegistartion(){
    return cy.get('[id="passwordControl"]');
  }
  static get repeatenterPasswordRegistartion(){
    return cy.get('[id="repeatPasswordControl"]');
  }
  static get clickSecurityQuestion(){
    return cy.get('[name="securityQuestion"]');
  }
  static get chooseSecurityQuestion(){
    return cy.get('[class="mat-option-text"]');
  }
  static get answerSecurityQuestion(){
    return cy.get('[id="securityAnswerControl"]');
  }
  static get registerNewAccount(){
    return cy.get('[class="material-icons"]');
  }
}
