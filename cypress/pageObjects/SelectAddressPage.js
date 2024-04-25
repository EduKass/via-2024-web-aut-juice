import { BasePage } from "../pageObjects/BasePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get selectAdress(){
    return cy.get('[class="ng-star-inserted"]');
  }

}