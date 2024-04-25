import { BasePage } from "../pageObjects/BasePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get clickOnPlaceOrderAndPay(){
    return cy.get('[class="mat-button-wrapper"]');
  }
}