// Constants.js
const prod = {
  url: {
    API_URL: "https://arcane-eyrie-05882.herokuapp.com/api",
  },
};
const dev = {
  url: {
    API_URL: "http://localhost:4000/api",
  },
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;
