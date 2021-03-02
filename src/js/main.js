import Fade from "./Fade/Fade.js";
import Price from "./Price/Price.js";
const toogle = document.getElementById("toogle");
const prices = document.querySelectorAll(".price");

let state = {
    checked: false,
};
const changePricing = () => {

    state.checked ? state.checked = false : state.checked = true;

    prices.forEach(item => {

        let price = new Price(item.innerText.slice(1));
        let value = price.calcPrice(state.checked);
        item.innerText = value;
        Fade(item);

    });
};
toogle.addEventListener("click", changePricing);
