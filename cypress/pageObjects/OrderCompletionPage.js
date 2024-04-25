import { BasePage } from "../pageObjects/BasePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get validateOrderCompletion(){
    return cy.get('[class="mat-card mat-focus-indicator mat-elevation-z0"]');
  }
}