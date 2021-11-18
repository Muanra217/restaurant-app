/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliiking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#content-card');
  I.see('Tidak ada resto untuk ditampilkan', '#content-card');
});

Scenario('unliking a restauran', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '#content-card');
  I.amOnPage('/');
  I.seeElement('.card a');
  const firstRestaurant = locate('.resto-name').first();
  const firstRestaurantsTitles = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('#content-card');
  const unlikedRestaurantsTitles = await I.grabTextFrom('.resto-name');
  assert.strictEqual(firstRestaurantsTitles, unlikedRestaurantsTitles);
  I.seeElement('.card a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada resto untuk ditampilkan', '#content-card');
});
