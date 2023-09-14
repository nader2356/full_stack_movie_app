

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
  
    state: "favorites"
  },
  {
    path: "/reviews",
   
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