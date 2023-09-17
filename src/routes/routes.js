import ProtectedPage from "../component/common/ProtectedPage";
import FavoriteList from "../pages/FavoriteList";
import HomePage from "../pages/HomePage";
import ReviewList from "../pages/ReviewItem";


export const routesGen = {
  home: "/",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  mediaSearch: "/search",
  person: (id) => `/person/${id}`,
  favoriteList: "/favorites",
  reviewList: "/reviews",
  passwordUpdate: "password-update"
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/person/:personId",
   
    state: "person.detail"
  },
  {
    path: "/search",
   
    state: "search"
  },
  {
    path: "/password-update",
  
    state: "password.update"
  },
  {
    path: "/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites"
  },
  {
    path: "/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews"
  },
  {
    path: "/:mediaType",
    
  },
  {
    path: "/:mediaType/:mediaId",
    
  }
];

export default routes;