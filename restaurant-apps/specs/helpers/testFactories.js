import LikeButtonInitiator from "../../src/scripts/like-button-presenter";

const createLikeButtonPresenterWithResto = async (resto) => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
};
   
export { createLikeButtonPresenterWithResto };