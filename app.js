const bar = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// services
const featuresImg = document.getElementById("featuresImg");
const service = document.querySelector(".services");
const simpleBook = document.querySelector(".simple");
const speedySearch = document.querySelector(".speedy");
const easyShare = document.querySelector(".easy");
const bookmarkTitle = document.getElementById("bookmarkTitle");
const bookmarkDesc = document.getElementById("bookmarkDesc")
const infoBtn = document.getElementById("infoBtn");

window.addEventListener("load", serviceFunc);

function serviceFunc() {
    simpleBook.classList.add("active");
    simpleBook.onClick = function () {
        featuresImg.src = "/images/illustration-features-tab-1.svg";
        bookmarkTitle.innerHTML = "Bookmark in one click";
        bookmarkDesc.innerHTML = "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
        infoBtn.classList.add("infoBtn");
        simpleBook.classList.add("active");
        speedySearch.classList.remove("active");
        easyShare.classList.remove("active");
    }
    speedySearch.onClick = function () {
        featuresImg.src = "/images/illustration-features-tab-2.svg";
        bookmarkTitle.innerHTML = "Intelligent search";
        bookmarkDesc.innerHTML = "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
        infoBtn.classList.add("infoBtn");
        simpleBook.classList.remove("active");
        speedySearch.classList.add("active");
        easyShare.classList.remove("active");
    }
    simpleBook.onClick = function () {
        featuresImg.src = "/images/illustration-features-tab-1.svg";
        bookmarkTitle.innerHTML = "Share your bookmarks";
        bookmarkDesc.innerHTML = " Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
        infoBtn.classList.add("infoBtn");
        simpleBook.classList.remove("simple-active");
        speedySearch.classList.remove("speedy-active");
        easyShare.classList.add("easy-active");
    }
}
// contact us
const email = document.getElementById("email-input");
const subscribe = document.getElementById("contact-us");

if (!email) {
    email.innerHTML = "whoops, make sure it's an email";
}