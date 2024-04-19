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
    cy.get("[id='newCustomerLink']");
  }
}
