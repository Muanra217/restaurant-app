/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked resto', ({ I }) => {
  I.seeElement('#content-card');
  I.see('Tidak ada resto untuk ditampilkan', '#content-card');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '#content-card');

  I.amOnPage('/');
  I.seeElement('.card a');
  const firstResto = locate('.resto-name').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.card');
  const likedRestoName = await I.grabTextFrom('.resto-name');

  assert.strictEqual(firstRestoName, likedRestoName);
});
