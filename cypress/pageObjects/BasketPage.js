import { BasePage } from "../pageObjects/BasePage";

export class BasketPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get addToBasket(){
    return cy.get('[aria-label="Add to Basket"]');
  }
  static get clickOnBasket(){
    return cy.get('[class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"]');
  }
  static get clickOnCheckout(){
    return cy.get('[id="checkoutButton"]');
  }
  static get clickContinue(){
    return cy.get('[class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"]');
  }
}