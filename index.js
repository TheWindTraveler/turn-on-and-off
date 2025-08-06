const myBulb = document.getElementById("myBulb");
const onSwitchButton = document.querySelector("on-switch");
const offSwitchButton = document.querySelector("off-switch");

//Toggle by clicking the image
myBulb.addEventListener("click", () => {
    if (myBulb.src.includes("on-switch")) {
        myBulb.src = "assets/pic_bulbon.gif";
    } else {
        myBulb.src = "assets/pic_bulbon.gif";
    }
});