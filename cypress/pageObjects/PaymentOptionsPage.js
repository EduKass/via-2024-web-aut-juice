import { BasePage } from "../pageObjects/BasePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get choosePaymentOption(){
    return cy.get('[class="mat-radio-button mat-accent"]');
  }
}