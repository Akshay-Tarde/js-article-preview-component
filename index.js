const share_div = document.querySelector('.share-div') 

const share_btn = document.querySelector('.share-icon-container');

const active_share_btn = document.querySelector(".share-icon-container-active")

const active_share = document.querySelector('.active-share')


share_btn.addEventListener("click", () => {
    active_share.classList.add("active-share-translate")
})

active_share_btn.addEventListener("click", () => {
    active_share.classList.remove("active-share-translate")
})