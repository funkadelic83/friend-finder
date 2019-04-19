var friends = [

    {
        "name": "Bassem Youssef",
        "photo": "https://en.wikipedia.org/wiki/Bassem_Youssef#/media/File:Bassem_Youssef.jpg",
        "scores": [
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
        ]
    }
];

var tryMe = function tryMe() {
    console.log("tryMe has been called!");
    for (var i = 0; i < friends.length; i++) {
        for (var j = 0; j < friends[i].scores.length; j++) {
            console.log(friends[i].scores[j]);
            // var difference = (Math.abs(friends[i].scores[j]) - (newfriend.scores[j]));
        // }
    };


    //THEN, SORT THE FRIENDS BY DIFFERENCE SCORE
    //FIND THE FRIEND WITH THE LOWEST DIFFENCE SCORE THAT ISNT THE NEW FRIEND (CURRENT USER)
    //CREATE A MODAL POPUP WITH THE CLOSEST MATCH



    
}
}

 



module.exports = {
    friends: friends,
    tryMe: tryMe
};