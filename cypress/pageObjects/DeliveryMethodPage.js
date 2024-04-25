import { BasePage } from "../pageObjects/BasePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get chooseDeliveryMethod(){
    return cy.get('[class="mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted"]');
  }
}