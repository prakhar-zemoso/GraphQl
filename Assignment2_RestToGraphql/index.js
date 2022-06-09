const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const typeDefs = `
  type Query {
    getIncomingResponse(login: String!): IncomingResponse
  }
  type IncomingResponse {
    login: String
    html_url: String
    name: String
    company: String
    location: String
  }
`;

const resolvers = {
  Query: {
    getIncomingResponse: async (incomingResponse, id) => {
      const response = await fetch(`https://api.github.com/users/${id.login}`);
      const data = await response.json();

      return data;
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));