import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
  <div>
    <h2 class="resto__title">${resto.name}</h2>
    <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_LARGE + resto.pictureId}" alt="${resto.name}" />
  </div>
  <div class="resto__info">
    <h3>Information</h3>
    <h4>Restaurant Name</h4>
    <p>${resto.name}</p>
    <h4>Rating</h4>
    <p>${resto.rating}</p>
    <h4>City</h4>
    <p>${resto.city}</p>
    <h4>Address</h4>
    <p>${resto.address}</p>
    <h4>Menu Category</h4>
    <p>${resto.categories.map((category) => ` ${category.name}`)}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${resto.description}</p>
  </div>
  <div class="resto__menus">
    <h3>Food Menu</h3>
    <p>${resto.menus.foods.map((food) => ` ${food.name}`)}</p>
    <h3>Drink Menu</h3>
    <p>${resto.menus.drinks.map((drink) => ` ${drink.name}`)}</p>
  </div>
  <div class="resto__reviews">
    <h3>Customer Review</h3>
    ${resto.customerReviews.map((review) => `
      <div class="restoInfoList">
          <h4 tabindex="0">${review.name}</h4>
          <p tabindex="0" class="date-review">${review.date}</p>
          <p tabindex="0" class="text-review">${review.review}</p>
      </div>
    `).join('')}
  </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="card">
      <a href="${`/#/detail/${resto.id}`}">
          <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_SMALL + resto.pictureId}" alt="${resto.name}" style="width:100%">
          <div class="text-card">
            <h3 tabindex="0" class="resto-name">${resto.name}</h3>
            <p class="city" tabindex="0">${resto.city}</p>
            <p tabindex="0" class="rating">Rating: ${resto.rating} <span>&#9733</span></p>
          </div>
      </a>
    </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
};
