
$(document).ready(function() {

        var score = 0
        var goalNumber = 0
        var wins = 0
        var losses = 0 
        var crystal1 = 0
        var crystal2 = 0
        var crystal3 = 0
        var crystal4 = 0

    var restart = function(){
        crystal1 = Math.floor(Math.random() * 12) + 1;;
        crystal2 = Math.floor(Math.random() * 12) + 1;;
        crystal3 = Math.floor(Math.random() * 12) + 1;;
        crystal4 = Math.floor(Math.random() * 12) + 1;;
    

    console.log (crystal1);
    console.log (crystal2);
    console.log (crystal3);
    console.log (crystal4);

    goalNumber = Math.floor(Math.random() * (120-19) + 19);
    $("#goal-number").text(goalNumber)

    console.log (goalNumber);

    score = 0
    $("#score").text("Your total score is: " + score);
    };

    $("#blue").append("<img src='assets/images/blue.png' width='100px'/>");
    $("#green").append("<img src='assets/images/green.jpg' width='100px'/>");
    $("#red").append("<img src='assets/images/red.png' width='100px'/>");
    $("#yellow").append("<img src='assets/images/yellow.png' width='100px'/>");


    restart();

    $("#blue").click(function(){
        score = score + crystal1;
    $("#score").text(" " + score);
    add()
    console.log(this);
    });

    $("#green").click(function(){
        score = score + crystal2;
    $("#score").text(" " + score);
    add()
    console.log(this);
    });

    $("#red").click(function(){
        score = score + crystal3;
    $("#score").text(" " + score);
    add()
    console.log(this);
    });

    $("#yellow").click(function(){
        score = score + crystal4;
    $("#score").text(" " + score);
    add()
    console.log(this);
    });
    

    var add = function(){
        if (score > goalNumber){
            alert("You lost...");
            losses = losses + 1
            $("#losses").text("Losses: " + losses);
            restart();
        }

        if (score === goalNumber){
            alert("You Win!");
            wins = wins + 1
            $("#wins").text("Wins: " + wins);
            restart();
        }
    };

})