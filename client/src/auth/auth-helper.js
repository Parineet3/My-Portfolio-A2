// // client/src/auth/auth-helper.js

// // Save token + user info in localStorage
// const authenticate = (jwt, cb) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("jwt", JSON.stringify(jwt));
//   }
//   cb(); // callback (usually redirect)
// };

// // Check if user is logged in
// const isAuthenticated = () => {
//   if (typeof window == "undefined") return false;

//   if (localStorage.getItem("jwt")) {
//     return JSON.parse(localStorage.getItem("jwt"));
//   } else {
//     return false;
//   }
// };

// // Return only the JWT token (for Authorization header)
// const getToken = () => {
//   const auth = isAuthenticated();
//   return auth ? auth.token : null;
// };

// // Return only the user object
// const getUser = () => {
//   const auth = isAuthenticated();
//   return auth ? auth.user : null;
// };

// // Logout user → remove token from localStorage
// const clearJWT = (cb) => {
//   if (typeof window !== "undefined") {
//     localStorage.removeItem("jwt");
//   }
//   cb(); // callback (usually redirect)
// };

// export default {
//   authenticate,
//   isAuthenticated,
//   getToken,
//   getUser,
//   clearJWT,
// };


// src/auth/auth-helper.js

const auth = {
  authenticate(jwt, cb) {
    if (typeof window !== "undefined") {
      localStorage.setItem("jwt", JSON.stringify(jwt));
    }
    cb();
  },

  isAuthenticated() {
    if (typeof window == "undefined") return false;

    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    } else return false;
  },

  clearJWT(cb) {
    if (typeof window !== "undefined") {
      localStorage.removeItem("jwt");
    }
    cb();
  },
};

export default auth;

