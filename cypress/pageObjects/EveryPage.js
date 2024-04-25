import { BasePage } from "../pageObjects/BasePage";

export class EveryPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get clickOnSearchBar(){
    return cy.get('[class="mat-icon notranslate mat-ripple mat-search_icon-search ng-tns-c130-1 material-icons mat-ligature-font mat-icon-no-color"]');
  }
  static get inputInSearchBar(){
    return cy.get('[id="mat-input-0"]');
  }
  static get clickOnProduct(){
    return cy.get('[class="mat-card-image img-responsive img-thumbnail"]');
  }
  static get checkDescription(){
    return cy.get('[class="container mat-typography"]')
  }
  static get clickOnLemon500(){
    return cy.get('[src="assets/public/images/products/lemon_juice.jpg"]');
  }
  static get selectEggFruit500(){
    return cy.get('[src="assets/public/images/products/eggfruit_juice.jpg"]');
  }
  static get exitDesc(){
    return cy.get('[type="button"]');
  }
  static get selectStrawberry500(){
    return cy.get('[src="assets/public/images/products/strawberry_juice.jpeg"]');
  }
  static get expandReview(){
    return cy.get('[aria-label="Expand for Reviews"]');
  }
  static get validateReview(){
    return cy.get('[class="mat-tooltip-trigger review-text"]');
  }
  static get enterReview(){
    return cy.get('[placeholder="What did you like or dislike?"]');
  }
  static get submitReview(){
    return cy.get('[class="mat-button-wrapper"]');
  }
  static get checkItemsPerPage(){
    return cy.get('[class="mat-paginator-range-label"]');
  }
  static get clickOnChangeItemsPerPage(){
    return cy.get('[id="mat-select-value-1"]');
  }
  static get choosePageNumber(){
    return cy.get('[class="cdk-overlay-pane"]');
  }
  static get selectOrdersAndPayments(){
    return cy.get('[id="mat-menu-panel-0"]');
  }
  static get selectMySavedAddresses(){
    return cy.get('[aria-label="Go to saved address page"]');
  }
  static get selectMyPaymentOptions(){
    return cy.get('[aria-label="Go to saved payment methods page"]');
  }
}
