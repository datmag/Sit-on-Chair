// Zad 1
/* -------------------------------------------- */
/* page-nav-list mechanism*/
/* -------------------------------------------- */


// const firm = document.querySelector(".page-nav-list>li");
// const subList = document.querySelector(".page-nav-sublist");

// const showList = event => {
//     event.preventDefault();
//     subList.style.display = "block";
// }

// const hideList = event => {
//     event.preventDefault();
//     subList.style.display = "none";
// }

// firm.addEventListener("mouseover", showList);
// firm.addEventListener("mouseout", hideList);



// Zad 2
/* -------------------------------------------- */
/* main-news image mechanism*/
/* -------------------------------------------- */

// const img1 = document.querySelector(".news-box-1");
// const img2 = document.querySelector(".news-box-2");


// function hideBox() {
//     const nameOpa = this.querySelectorAll(".news-box-opa");

//     for (let item of nameOpa) {
//         item.style.display = "none";
//     }
// }

// function showBox() {
//     const nameOpa = this.querySelectorAll(".news-box-opa");

//     for (let item of nameOpa) {
//         item.style.display = "block";
//     }
// }

// img1.addEventListener("mouseover", hideBox);
// img1.addEventListener("mouseout", showBox);
// img2.addEventListener("mouseover", hideBox);
// img2.addEventListener("mouseout", showBox);



// Zad 3

/* -------------------------------------------- */
/* SLIDER mechanism*/
/* -------------------------------------------- */

const prevBtn = document.querySelector(".banner-prev");
const nextBtn = document.querySelector(".banner-next");
const showImage = document.querySelector(".banner-slide-show");
const images = document.querySelectorAll(".banner-slide");

let currentIndex = 0;


const prevImage = event => {
    event.preventDefault();
    images[currentIndex].classList.remove("banner-slide-show");

    (currentIndex === 0) ? currentIndex = images.length - 1 : currentIndex--;

    images[currentIndex].classList.add("banner-slide-show");
}

const nextImage = event => {
    event.preventDefault();
    images[currentIndex].classList.remove("banner-slide-show");
    
    (currentIndex === images.length - 1) ? currentIndex = 0 : currentIndex++;

    images[currentIndex].classList.add("banner-slide-show");
}

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);



// DROP-DOWN

// a)

const lists = document.querySelectorAll(".list_panel");
const arrow = document.querySelectorAll(".list_arrow");


for (let item of arrow) {

    item.addEventListener("click", function(event) {
        event.preventDefault();
        const list = this.nextSibling.nextSibling;

        list.classList.toggle("show_panel");

        window.onclick = event => {
            if (!event.target.matches(".list_arrow")) {
             
                for (let i = 0; i < lists.length; i++) {
                    const openDropdown = lists[i];
                    if (openDropdown.classList.contains("show_panel")) {
                        openDropdown.classList.remove("show_panel");
                    }
                }
            }
        }
    });
};



// c)

const itemInLists = document.querySelectorAll(".list_panel li");
const transportInp = document.querySelector("#transport");

const image = document.querySelector(".image_part img");

const chairType = document.querySelector(".panel_title_chair");
const chairColor = document.querySelector(".color");
const chairPattern = document.querySelector(".pattern");
const price = document.querySelectorAll(".value");
const transport = document.querySelector(".transport");

const panelPrice = document.querySelector(".panel_right");
const sumWrite = document.querySelector(".sum strong");

let totalPrice = 0;


const sum = () => {
    let totalPrice = 0;

    const prices = panelPrice.children;
    
    for (let item of prices) {
        pri = Number(item.innerHTML)
        totalPrice += pri;
    }
    
    sumWrite.innerHTML = totalPrice + " zł";
}

function calculateProducts() {
    const text = this.innerHTML;

    if (this === itemInLists[0] || this === itemInLists[1] || this === itemInLists[2]) {
        this.parentElement.parentElement.children[0].innerHTML = text;
        chairType.innerHTML = "Chair " + text;
        price[0].innerHTML = this.dataset.kindPrice;
    };

    if (this === itemInLists[3] || this === itemInLists[4] || this === itemInLists[5]) {
        this.parentElement.parentElement.children[0].innerHTML = text;
        chairColor.innerHTML = text;
        price[1].innerHTML = this.dataset.colorPrice;

        if (this === itemInLists[3]) {
            image.src = "./images/red_chair.png";
        }
        if (this === itemInLists[4]) {
            image.src = "./images/black_chair.png";
        }
        if (this === itemInLists[5]) {
            image.src = "./images/orange_chair.png";
        }
    };

    if (this === itemInLists[6] || this === itemInLists[7]) {
        this.parentElement.parentElement.children[0].innerHTML = text;
        chairPattern.innerHTML = text;  
        price[2].innerHTML = this.dataset.patternPrice;
    };

    sum();
}

function addTransport() {
    if (this.checked) {
        transport.innerHTML = this.nextSibling.nextSibling.innerHTML;
        price[3].innerHTML = this.dataset.transportPrice;
    } else {
        transport.innerHTML = null;
        price[3].innerHTML = null;
    }

    sum();
}




for (let i = 0; i < itemInLists.length; i++) {
    itemInLists[i].addEventListener("click", calculateProducts);
}
transportInp.addEventListener("click", addTransport);