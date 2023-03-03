var character = $("#character");
var block = $("#block");
function jump(){
    if(!character.hasClass("animate")){
        character.addClass("animate");
    }
    setTimeout(function(){
        character.removeClass("animate");
    }, 500);
}
var checkDead = setInterval(function(){
    var characterTop = parseInt(character.css("top"));
    var blockleft = parseInt(block.css("left"));
    console.log(block[0].getBoundingClientRect());
    if (blockleft > 0 && blockleft < 20 && characterTop >= 150) {
        console.log(block.css("animation"));
        block.css("animation", "none");
        console.log(block.css("display"));
        block.css("display", "none");
        alert("oops ! Game over ");
    }
}, 10);
$("#louka").click(function(){
    location.reload(true)
})