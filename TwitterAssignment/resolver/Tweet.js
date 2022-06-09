exports.Tweet = {
    Stats:({StatsId},args,{db})=>{
      return db.stats.find((stat) => stat.id === StatsId);
  
    }
  
  };