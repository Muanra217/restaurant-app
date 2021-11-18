import ExploreRest from '../pages/explore-rest';
import Detail from '../pages/detail';
import Like from '../pages/like';

const routes = {
  '/': ExploreRest, // default page
  '/explore-rest': ExploreRest,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
