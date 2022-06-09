const {ApolloServer, gql} = require ("apollo-server");
const {typeDefs} = require("./Schema");
const {Query} = require("./Query");
const {Category}= require("./Category");
const {Product}= require("./Product");
const {Mutation} = require("./Mutation")
// const {categories,products, reviews}= require("./db")
const {db} = require("./db")
   

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query, Category,Product,
        Mutation,
    },

    context:{
       db,
        
    }


});

server.listen().then(({url}) =>{

    console.log("server is ready at" + url);

})