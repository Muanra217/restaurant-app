import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
            <div id="resto" class="resto">
                <h2 class="title" tabindex="0">Your Favorite Restaurants</h2>
                <div id="content-card"></div>   
            </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const restaurantsContainer = document.querySelector('#content-card');
    // if data empty
    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = 'Tidak ada resto untuk ditampilkan';
    }

    restaurants.forEach((resto) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Like;
