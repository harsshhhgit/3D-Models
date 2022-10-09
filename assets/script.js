$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});
document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


function busterDrone() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/buster_drone.glb")
}
function cyberpunk() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/cyberpunk.glb")
}
function dodgeBike() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/dodge-bike.glb")
}
function fighterPlane() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/fighter-plane.glb")
}
function fpvDrone() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/fpv.glb")
}
function helicopter() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/helicopter.glb")
}
function hoverBike() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/hover_bike.glb")
}
function powerWeapon() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/high-power-weapon.glb")
}
function lamboAventador() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/lamborghini-aventador.glb")
}
function lamboGallardo() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/lamborghini-gallardo.glb")
}
function mercHover() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/merc_hover.glb")
}
function phoenix() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/phoenix.glb")
}
function planet() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/planet.glb")
}
function pattern() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/random-galaxy.glb")
}
function scifiVehicle1() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/scifi-vehicle.glb")
}
function scifiVehicle2() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/scifi-vehicle2.glb")
}
function vikingRoom() {
    document.getElementById("model").setAttribute("src", "./assets/glb-files/viking_room.glb")
}






// function porsche() {
//     document.getElementById("model").setAttribute("src", "./assets/glb-files/porsche.glb")
// }
// function traditionalAK() {
//     document.getElementById("model").setAttribute("src", "./assets/glb-files/traditional_AK.glb")
// }
// function house() {
//     document.getElementById("model").setAttribute("src", "./assets/glb-files/hand_painted_house.glb")
// }
// function conceptBike(){
//     document.getElementById("model").setAttribute("src", "./assets/glb-files/concept-bike.glb")
// }
// function weaponDrone() {
//     document.getElementById("model").setAttribute("src", "./assets/glb-files/weapon-drone.glb")
// }
// function weaponDrone2() {
//     document.getElementById("model").setAttribute("src", "./assets/glb-files/weapon-drone2.glb")
// }