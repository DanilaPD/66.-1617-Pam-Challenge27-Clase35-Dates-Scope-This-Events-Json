const clock = document.getElementById("clock");

const date = new Date();

const options = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}

const time = () => {
    clock.innerHTML = date.toLocaleDateString("es", options);
};