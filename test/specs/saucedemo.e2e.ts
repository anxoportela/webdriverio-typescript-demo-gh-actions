import { expect } from "@wdio/globals";

describe("SauceDemo Login", () => {
  it("should log in with valid credentials", async () => {
    // Abre la página de SauceDemo
    await browser.url("https://www.saucedemo.com");

    // Ingresa las credenciales válidas
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");

    // Haz clic en el botón de login
    await $("#login-button").click();

    // Verifica que el login fue exitoso
    const title = await browser.getTitle();
    expect(title).toBe("Swag Labs");
  });
});

describe("SauceDemo Cart", () => {
  it("should add an item to the cart", async () => {
    // Abre la página de SauceDemo
    await browser.url("https://www.saucedemo.com");
    // Inicia sesión
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    // Agrega un artículo al carrito
    await $(".inventory_item:nth-child(1) .btn_inventory").click();

    // Verifica que el artículo esté en el carrito
    const cartCount = await $(
      "#shopping_cart_container .shopping_cart_badge"
    ).getText();
    expect(cartCount).toEqual("1");
  });
});

describe("SauceDemo Product Detail", () => {
  it("should navigate to product detail page", async () => {
    // Abre la página de SauceDemo
    await browser.url("https://www.saucedemo.com");
    // Inicia sesión
    await $("#user-name").setValue("standard_user");
    await $("#password").setValue("secret_sauce");
    await $("#login-button").click();

    // Haz clic en el primer artículo
    await $(".inventory_item:nth-child(1) .inventory_item_name").click();

    // Verifica que el título del producto esté presente
    const productTitle = await $(".inventory_details_name").getText();
    expect(productTitle).toHaveText;
  });
});
