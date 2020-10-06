const dummyData = [
    {
        id: 1,
        username: "philzcoffee",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1477763858572-cda7deaa9bc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1876&q=80',
        likes: 400,
        timestamp: "July 17th 2017, 12:42:40 pm",
        comments: [
            {
                id: 22,
                username: "philzcoffee",
                text: "We've got more than just coffees!",
            },
            {
                id: 23,
                username: "biancasaurus",
                text: "Looks delicious!",
            },
            {
                id: 24,
                username: "martinseludo",
                text: "Can't wait to try it!",
            },
        ],
    },
    {
        id: 2,
        username: "twitch",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3750&q=80',
        likes: 4307,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 36,
                username: "twitch",
                text: "Epic Street Fighter action here in Vegas!",
            },
            {
                id: 37,
                username: "michaelmarzetta",
                text: "Omg that match was crazy",
            },
            {
                id: 38,
                username: "themexican_leprechaun",
                text: "What a setup",
            },
            {
                id: 39,
                username: "dennis_futbol",
                text: "It that injustice",
            },
        ],
    },
    {
        id: 3,
        username: "heres_johnny",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTctwD7lj2cArtJryPYNA_2VZ6TfrQ9Z6sZhA&usqp=CAU',
        likes: 1000,
        timestamp: "April 17th 2017, 12:42:40 pm",
        comments: [
            {
                id: 25,
                username: "Patrick Bateman",
                text: "All it comes down to is this: I feel like shit but look great",
            },
            {
                id: 26,
                username: "Chuck_Palaniuk",
                text: "I don't want to die without any scars",
            },
            {
                id: 27,
                username: "Nick-Carraway",
                text: "So we beat on, boats against the current, borne back ceaselessly into the past",
            },
        ],
    },
    {
        id: 4,
        username: "Randy Marsh",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'data:image/jpeg;base64,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',
        likes: 20,
        timestamp: "July 15th 2017, 03:12:09 pm",
        comments: [
            {
                id: 40,
                username: "martin_brody",
                text: "We're gonna need a bigger boat",
            },
            {
                id: 41,
                username: "buff_bill",
                text: "It puts the lotion on its skin or else it gets the hose again",
            },
            {
                id: 42,
                username: "Steve-Buscemi",
                text: "I don't tip on principle",
            },
            {
                id: 43,
                username: "Spidey",
                text: "I don't want to go, Mr. Stark",
            },
        ],
    },
    {
        id: 5,
        username: "peterGriffin",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Peter_Griffin.png/220px-Peter_Griffin.png',
        likes: 43333,
        timestamp: "August 17th 2017, 3:42:40 pm",
        comments: [
            {
                id: 28,
                username: "BradPitt",
                text: "I need me 8 soldiers, 8 Jewish-American soldiers",
            },
            {
                id: 29,
                username: "Al Pacino",
                text: "Then they pulled me back in!",
            },
            {
                id: 30,
                username: "menudo",
                text: "Ven claridad llega ya amanece",
            },
        ],
    },
    {
        id: 6,
        username: "The Cranberries",
        thumbnailUrl: 'https://icon2.cleanpng.com/20180320/sqe/kisspng-twitch-computer-icons-streaming-media-youtube-live-tv-twitch-icon-5ab19172461392.001176751521586546287.jpg',
        imageUrl: 'https://cdn-wowslides-com.akamaized.net/users/lalesaslan/projects/lZqyzKN3P9O/assets/images/thumbnail.png',
        likes: 100,
        timestamp: "July 25th 2017, 07:12:09 pm",
        comments: [
            {
                id: 44,
                username: "REM",
                text: "Everybody hurts...",
            },
            {
                id: 45,
                username: "Marshall Mathers",
                text: "I am whatever you say I am",
            },
            {
                id: 46,
                username: "LarryDavid",
                text: "Pretty, pretty, pretty...",
            },
            {
                id: 47,
                username: "george_costanza",
                text: "I know I'm not Cartwright!",
            },
        ],
    },
];

export default dummyData;
