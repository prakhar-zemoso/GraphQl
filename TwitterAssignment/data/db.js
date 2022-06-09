const tweets=[
    { 
        id:"tweets"+1,
        body:"tweet1",
        date: "08/06/2022",
        StatsId:"stats"+1 
    },
    { 
        id:"tweets"+2,
        body:"tweet2",
        date: "08/06/2022",
        
        StatsId:"stats"+2 
    },
    { 
        id:"tweets"+3,
        body:"tweet3",
        date: "08/06/2022",
        StatsId:"stats"+3  
    }
]

const users=[
    {
        id: "users"+1,
        username: "prakhar03",
        first_name: "prakhar",
        last_name: "pandey",
        full_name: "Prakhar Pandey",
        name: "Prakhar",
        avatar_url: "www.google.com"
    },
    {
        id: "users"+2,
        username: "niks",
        first_name: "Nikhil",
        last_name: "Sharma",
        full_name: "Nikhil Sharma",
        name: "Nikhil",
        avatar_url: "www.fb.com"
    }
]

const stats=[
    {
        id:"stats"+1,
        views: 12,
        likes: 10,
        retweets: 5,
        responses: 4
    },
    {
        id:"stats"+2,
        views: 120,
        likes: 100,
        retweets: 50,
        responses: 40
    },
    {
        id:"stats"+3,
        views: 1250,
        likes: 1050,
        retweets: 550,
        responses: 450
    }
]

const notifications=[
    {
        id:"notifs"+1,
        date:"06/06/2022",
        type:"pop up"
    },
    {
        id:"notifs"+2,
        date:"07/06/2022",
        type:"pop up"
    },
    {
        id:"notifs"+3,
        date:"02/06/2022",
        type:"email"
    }
]
Meta={
    count:3
};

exports.db={
    notifications,
    stats,
    users,
    tweets,
    Meta
}