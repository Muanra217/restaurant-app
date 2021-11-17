import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async exploreRestaurant() {
    const response = await fetch(API_ENDPOINT.EXPLORE_REST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRest(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantSource;
