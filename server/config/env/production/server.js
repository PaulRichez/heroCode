module.exports = ({ env }) => ({
  url: env('https://strapi-nuvira.herokuapp.com/'),
  app: {
    keys: env.array("APP_KEYS", ["WfTliQtLYmN7nQtT4R8z0g==", "sTGFqRTo/cNwPZDdy/MCKw=="]),
  },
});