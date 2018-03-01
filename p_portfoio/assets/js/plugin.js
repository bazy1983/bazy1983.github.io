var aboutHeight = $("#about").height()-100,
    workHeight = $("#portfolio").height()-100;
//console.log (aboutHeight);

function scrollLogic() {
    
    var y = Math.floor($("#box").scrollTop());
    //console.log (y)
    //var yPosition = $("#work").offset()
    //console.log ("pos: " + this.offset.top)
    if(y < aboutHeight){
        $("body").css("background","#79bd8e");
        $(".pageName").text("Home");
    } else if (y >= aboutHeight && y <= 1000){

        $("body").css("background", "#b3bd79");
        $(".pageName").text("Work");

        console.log ($('#testimonial').position())
    } 
};


