import { BasePage } from "./BasePage";

export class SavedAddressesPage extends BasePage {
  static get url() {
    return "/#/login";
  }
  static get addNewAddresses(){
    return cy.get('[aria-label="Add a new address"]');
  }
}