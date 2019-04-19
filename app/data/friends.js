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
    // console.log("tryMe has been called!");
    for (var i = 0; i < friends.length; i++) {
        // var difference = 0;
        this.difference = 0;
        for (var j = 0; j < friends[i].scores.length; j++) {
            this.difference += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(friends[0].scores[j])));
        }
        console.log(this.difference);
        //I need to figure out how to give each friend their own difference score. use this?
        //Sort the array by the difference score
            // friends.difference.sort(function(a, b){return a-b});
        //Make a modal pop up that displays name and image of position 1 in the array. This will skip the user and display their closest match.
    ;
}
}

 



module.exports = {
    friends: friends,
    tryMe: tryMe
};