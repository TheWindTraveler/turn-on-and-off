const myBulb = document.getElementById("myBulb");
const onSwitchButton = document.getElementById("on-switch");
const offSwitchButton = document.getElementById("off-switch");
let notificationMessage = document.getElementById("notification-message");


function updateMessage(isOn) {
    notificationMessage.textContent = isOn
    ? "Yo! Your light is on, Boss"
    : "Your Light is off now, Boss";
}

onSwitchButton.addEventListener("click", function() {
    myBulb.src = "assets/pic_bulbon.gif";
        updateMessage(true);
})

offSwitchButton.addEventListener("click", function() {
    myBulb.src = "assets/pic_bulboff.gif";
    updateMessage(false);
})