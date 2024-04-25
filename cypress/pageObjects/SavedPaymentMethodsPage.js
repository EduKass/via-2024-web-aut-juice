import { BasePage } from "../pageObjects/BasePage";

export class SavedPaymentMethodsPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get clickAddCard(){
    return cy.get('[id="mat-expansion-panel-header-0"]');
  }
  static get name() {
    return cy.get('input').eq(1);
    }
  static get fillInCardNumber(){
    return cy.get('input').eq(2);
  }
  static get setExpiryMonth(){
    return cy.get('select').eq(0);
  }
  static get setExpiryYear(){
    return cy.get('select').eq(1);
  }
  static get SUBMITFINALLY(){
    return cy.get('[class="mat-button-wrapper"]');
  }
  static get VALIDATE(){
    return cy.get('[class="mat-row cdk-row ng-star-inserted"]');
  }
}