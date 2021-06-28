module.exports = {
  client: {
    includes: ["./src/**/*.{ts,tsx,graphql}"],
    tagName: "gql",
    service: {
      name: "gescord-backend",
      url: "http://localhost:3001/graphql",
    },
  },
};
