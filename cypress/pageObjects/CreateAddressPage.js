import { BasePage } from "../pageObjects/BasePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get enterCountry(){
    return cy.get('[placeholder="Please provide a country."]');
  }
  static get enterName(){
    return cy.get('[placeholder="Please provide a name."]');
  }
  static get enterMobileNumber(){
    return cy.get('[placeholder="Please provide a mobile number."]');
  }
  static get enterZIPcode(){
    return cy.get('[placeholder="Please provide a ZIP code."]');
  }
  static get enterAddress(){
    return cy.get('[placeholder="Please provide an address."]');
  }
  static get enterCity(){
    return cy.get('[placeholder="Please provide a city."]');
  }
  static get submitAddress(){
    return cy.get('[id="submitButton"]');
  }
  static get validateAddress(){
    return cy.get('[class="mat-cell cdk-cell cdk-column-Address mat-column-Address ng-star-inserted"]');
  }
}