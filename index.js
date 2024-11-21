const share_div = document.querySelector('.share-div') 

const share_btn = document.querySelector('.share-icon-container');

const active_share_btn = document.querySelector(".share-icon-container-active")
const active_share = document.querySelector('.active-share')

share_btn.addEventListener("click", () => {
    share_div.classList.toggle("share-div-disappear")
    active_share.classList.toggle("active-share-disappear")
})

active_share_btn.addEventListener("click", () => {
    share_div.classList.toggle("share-div-disappear")
    active_share.classList.toggle("active-share-disappear")
})