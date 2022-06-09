exports.Query = {
    hello: (parent, args, context) => "World",
    Tweets:(parent,args,{db})=>{
        let tweets=db.tweets;
        return tweets
    },
    Tweet:(parent,{id},{db})=>{
      return db.tweets.find((tweet) => tweet.id === id);
    },
    User:(parent,{id},{db})=>{
      return db.users.find((User) => User.id === id);
    },
      Notifications:(parent,args,{db})=>{
          return db.notifications
      }
  };