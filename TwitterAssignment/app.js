const express = require('express');
const { ApolloServer, gql } = require('apollo-server');
const {typeDefs}=require("./schema/Schema")
const {Query}=require("./resolver/Query");
const {db}=require("./data/db");
const { Tweet } = require('./resolver/Tweet');
const {Mutation}=require("./resolver/Mutation")
const app = express();

const server=new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Tweet,
        Mutation
    },
    context:{
        db,
    },
});


server.listen(9000)