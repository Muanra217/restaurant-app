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
    I.seeElement('.card .text-card a');
    const firstResto = locate('.resto-name').first();
    const firstRestoName = await I.grabTextFrom(firstResto);
    I.click(firstResto);
   
    I.seeElement('#likeButtonContainer #likeButton');
    I.click('#likeButtonContainer  #likeButton');
    
    I.amOnPage('/#/like');
    I.seeElement('.card .text-card');
    const likedRestoName = await I.grabTextFrom('.resto-name');
   
    assert.strictEqual(firstRestoName, likedRestoName);
})

Scenario('unliking a restaurant', async ({ I }) => {
    I.seeElement('.card .text-card');
    const likedCardTitle = await I.grabTextFrom('.resto-name');
    I.click(likedCardTitle);
  
    I.seeElement('#likeButton');
    I.click('#likeButton');
  
    I.amOnPage('/#/like');
    I.seeElement('#content-card');
    I.dontSeeElement('.card .text-card');
    I.dontSeeElement('.resto-name');
});

