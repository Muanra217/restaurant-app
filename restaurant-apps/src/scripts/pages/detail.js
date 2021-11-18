import UrlParser from '../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../like-button-presenter';

const Detail = {
  async render() {
    return `
      <div id="resto" class="resto">
            <h2 class="title" tabindex="0">Detail Restaurant</h2>
            <div id="restoCard"></div>   
      </div>
      <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.detailRest(url.id);
    const restaurantsContainer = document.querySelector('#restoCard');
    restaurantsContainer.innerHTML = createRestoDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restaurants.id,
        name: restaurants.name,
        description: restaurants.description,
        city: restaurants.city,
        rating: restaurants.rating,
        pictureId: restaurants.pictureId,
      },
    });
  },
};

export default Detail;
