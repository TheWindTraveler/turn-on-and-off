const myBulb = document.getElementById("myBulb");
const onSwitchButton = document.getElementById("on-switch");
const offSwitchButton = document.getElementById("off-switch");
let notificationMessage = document.getElementById("notification-message");

function notificationMessageTimeOut(duration = 4000) {
       setTimeout(() => {
        notificationMessage.style.display = "none"
    }, duration);
}

function updateMessage(isOn) {
    notificationMessage.textContent = isOn
    ? "Yo! Your light is on, Boss"
    : "Your Light is off now, Boss";
}

onSwitchButton.addEventListener("click", function() {
    myBulb.src = "assets/pic_bulbon.gif";
        updateMessage(true);
        notificationMessage.style.display = "block";
        notificationMessageTimeOut()
    })

offSwitchButton.addEventListener("click", function() {
    myBulb.src = "assets/pic_bulboff.gif";
    updateMessage(false);
    notificationMessage.style.display = "block";
    notificationMessageTimeOut()
})