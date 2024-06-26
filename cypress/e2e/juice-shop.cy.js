import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { EveryPage } from "../pageObjects/EveryPage";
import { BasketPage } from "../pageObjects/BasketPage";
import { OrderSummaryPage } from "../pageObjects/OrderSummaryPage";
import { PaymentOptionsPage } from "../pageObjects/PaymentOptionsPage";
import { DeliveryMethodPage } from "../pageObjects/DeliveryMethodPage";
import { SelectAddressPage } from "../pageObjects/SelectAddressPage";
import { OrderCompletionPage } from "../pageObjects/OrderCompletionPage";
import { SavedAddressesPage } from "../pageObjects/SavedAddressesPage";
import { CreateAddressPage } from "../pageObjects/CreateAddressPage";
import { SavedPaymentMethodsPage } from "../pageObjects/SavedPaymentMethodsPage";
describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      LoginPage.elementName.contains("Account").click();
      // Click Login button
      LoginPage.clickLogin.click();
      // Set email value to "demo"
      LoginPage.enterEmail.type("demo");
      // Set password value to "demo"
      LoginPage.enterPassword.type("demo");
      // Click Log in
      LoginPage.pressLoginEnteredDetails.click();
      // Click Account button
      LoginPage.elementName.contains("Account").click();
      // Validate that "demo" account name appears in the menu section
      LoginPage.checkUserName.contains("demo");
    });

    it("Registration", () => {
      // Click Account button
      LoginPage.elementName.contains("Account").click();
      // Login button
      LoginPage.clickLogin.click();
      // Click "Not yet a customer?"
      LoginPage.newCustomer.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      var email = LoginPage.generateEmail();
      LoginPage.enterEmailRegistration.type(email);
      // Fill in password field and repeat password field with same password
      LoginPage.enterPasswordRegistartion.type("password123");
      LoginPage.repeatenterPasswordRegistartion.type("password123");
      // Click on Security Question menu
      LoginPage.clickSecurityQuestion.click();
      // Select  "Name of your favorite pet?"
      LoginPage.chooseSecurityQuestion.contains("pet").click();
      // Fill in answer
      LoginPage.answerSecurityQuestion.type("pika");
      // Click Register button
      LoginPage.registerNewAccount.contains("person_add").click();
      // Set email value to previously created email
      LoginPage.enterEmail.type(email);
      // Set password value to previously used password value
      LoginPage.enterPassword.type("password123");
      // Click login button
      LoginPage.pressLoginEnteredDetails.click();
      // Click Account button
      LoginPage.elementName.contains("Account").click();
      // Validate that account name (with previously created email address) appears in the menu section
      LoginPage.checkUserName.contains(email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      EveryPage.clickOnSearchBar.click();
      // Search for Lemon
      EveryPage.inputInSearchBar.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      EveryPage.clickOnProduct.click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      EveryPage.checkDescription.should("contain.text", "Sour but full of vitamins.")
    });
    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("xxx", () => {
    // Click on search icon
    EveryPage.clickOnSearchBar.click();
    // Search for 500ml
    EveryPage.inputInSearchBar.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    EveryPage.clickOnLemon500.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    EveryPage.checkDescription.should("contain.text", "Sour but full of vitamins.");
    });
    // Create scenario - Search 500ml and validate cards
    it("yyy", () => {
    // Click on search icon
    EveryPage.clickOnSearchBar.click();
    // Search for 500ml
    EveryPage.inputInSearchBar.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    EveryPage.selectEggFruit500.click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    EveryPage.checkDescription.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    EveryPage.exitDesc.contains("close").click();
    // Select a product card - Lemon Juice (500ml)
    EveryPage.clickOnLemon500.click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    EveryPage.checkDescription.should("contain.text", "Sour but full of vitamins.");
    // Close the card
    EveryPage.exitDesc.contains("close").click();
    // Select a product card - Strawberry Juice (500ml)
    EveryPage.selectStrawberry500.click();
    // Validate that the card (should) contains "Sweet & tasty!"
    EveryPage.checkDescription.should("contain.text", "Sweet & tasty!");
    });

    // Create scenario - Read a review
    it("zzz", () => {
    // Click on search icon
    EveryPage.clickOnSearchBar.click();
    // Search for King
    EveryPage.inputInSearchBar.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    EveryPage.clickOnProduct.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(1000);
    EveryPage.expandReview.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    EveryPage.validateReview.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    });

    // Create scenario - Add a review
    it("xyz", () => {
    // Click on search icon
    EveryPage.clickOnSearchBar.click();
    // Search for Raspberry
    EveryPage.inputInSearchBar.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    EveryPage.clickOnProduct.click();
    // Type in review - "Tastes like metal"
    cy.wait(1000);
    EveryPage.enterReview.type("Tastes like metal");
    cy.wait(1000);
    // Click Submit
    EveryPage.submitReview.contains("Submit").click();
    // Click expand reviews button/icon (wait for reviews to appear)
    EveryPage.expandReview.click();
    // Validate review -  "Tastes like metal"
    EveryPage.validateReview.should("contain.text", "Tastes like metal");
    });

    // Create scenario - Validate product card amount
    it("xyzzyx", () => {
    // Validate that the default amount of cards is 12
    EveryPage.checkItemsPerPage.contains("12");
    // Change items per page (at the bottom of page) to 24
    EveryPage.clickOnChangeItemsPerPage.click();
    EveryPage.choosePageNumber.contains("24").click();
    // Validate that the amount of cards is 24
    EveryPage.checkItemsPerPage.contains("24");
    // Change items per page (at the bottom of page) to 36
    EveryPage.clickOnChangeItemsPerPage.click();
    EveryPage.choosePageNumber.contains("36").click();  
    // Validate that the amount of cards is 35
    EveryPage.checkItemsPerPage.contains("35");
    });

    // Create scenario - Buy Girlie T-shirt
    it(" Buy Girlie T-shirt", () => {
    // Click on search icon
    EveryPage.clickOnSearchBar.click();
    // Search for Girlie
    EveryPage.inputInSearchBar.type("Girlie{enter}");
    // Add to basket "Girlie"
    BasketPage.addToBasket.click();
    // Click on "Your Basket" button
    BasketPage.clickOnBasket.contains("shopping_cart").click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.clickOnCheckout.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.selectAdress.contains("United Fakedom").click();
    // Click Continue button
    BasketPage.clickContinue.contains("navigate_next").click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.chooseDeliveryMethod.contains("Standard").click();
    // Click Continue button
    BasketPage.clickContinue.contains("navigate_next").click();
    // Create page object - PaymentOptionsPage 
    // Select card that ends with "5678"
    PaymentOptionsPage.choosePaymentOption.click();  
    // Click Continue button
    BasketPage.clickContinue.contains("navigate_next").click(); 
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.clickOnPlaceOrderAndPay.contains("Place your order and pay").click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.validateOrderCompletion.should("contain.text", "Thank you for your purchase!");
    });

    // Create scenario - Add address
    it("Add adress", () => {
    // Click on Account
    LoginPage.elementName.contains("Account").click();
    // Click on Orders & Payment
    EveryPage.selectOrdersAndPayments.contains(" Orders & Payment ").click();
    // Click on My saved addresses
    EveryPage.selectMySavedAddresses.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressesPage.addNewAddresses.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.enterCountry.type("Latvia");
    CreateAddressPage.enterName.type("Eduards");
    CreateAddressPage.enterMobileNumber.type("2323232");
    CreateAddressPage.enterZIPcode.type("LV-4500");
    CreateAddressPage.enterAddress.type("ka butu ar ne");
    CreateAddressPage.enterCity.type("Valmiera");
    // Click Submit button
    CreateAddressPage.submitAddress.click();
    // Validate that previously added address is visible
    CreateAddressPage.validateAddress.should("contain.text","ka butu ar ne");
    });

    // Create scenario - Add payment option
    it.only("Add payment", () => {
    // Click on Account
    LoginPage.elementName.contains("Account").click();
    // Click on Orders & Payment
    EveryPage.selectOrdersAndPayments.contains(" Orders & Payment ").click();
    // Click on My payment options
    EveryPage.selectMyPaymentOptions.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPaymentMethodsPage.clickAddCard.click();
    // Fill in Name
    SavedPaymentMethodsPage.name.type("John Doe");
    // Fill in Card Number
    SavedPaymentMethodsPage.fillInCardNumber.type("1212121212121212");
    // Set expiry month to 7
    SavedPaymentMethodsPage.setExpiryMonth.select(6);
    // Set expiry year to 2090
    SavedPaymentMethodsPage.setExpiryYear.select(10);
    // Click Submit button
    SavedPaymentMethodsPage.SUBMITFINALLY.contains("send").click();
    // Validate that the card shows up in the list
    SavedPaymentMethodsPage.VALIDATE.contains("John Doe");
    });
  });
});
