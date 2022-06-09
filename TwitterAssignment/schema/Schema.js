const {ApolloServer,gql} = require('apollo-server');

exports.typeDefs=gql`
    type Query{
        hello:String!
        Tweets:[Tweet!]!
        Tweet(id:ID!): Tweet
        User(id:ID!): User
        Notifications: [Notification]
    }
    type Tweet{
        id:ID!
        body:String
        date:String
        Stats:Stat  
    }
    type User {
        id: ID!
        username: String
        first_name: String
        last_name: String
        full_name: String
        name: String 
        avatar_url: String
    }
    type Stat {
        id:ID!
        views: Int
        likes: Int
        retweets: Int
        responses: Int
    }
    type Meta{
   count:Int
}
type Notification {
   id: ID!
   
   type: String
}
type Mutation {
createTweet (
    body: String
): Tweet
deleteTweet(id: ID!): Tweet
}
`