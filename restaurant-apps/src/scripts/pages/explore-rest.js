import RestaurantSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const ExploreRest = {
  async render() {
    return `
      <div id="resto" class="resto">
            <h2 class="title" tabindex="0">Explore Restaurants</h2>
            <div id="content-card"></div>   
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantSource.exploreRestaurant();
    const restaurantsContainer = document.querySelector('#content-card');
    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default ExploreRest;
