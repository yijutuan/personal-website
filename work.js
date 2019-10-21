// check for onclick nav coding id
// change coding page to display: block
// change teaching page and other page to display: none

let codingButton = document.getElementById("nav-coding");
let teachingButton = document.getElementById("nav-teaching");
let otherButton = document.getElementById("nav-other");

let codingPage = document.getElementById("coding-page");
let teachingPage = document.getElementById("teaching-page");
let otherPage = document.getElementById("other-page");

codingButton.onclick = () => {
    changePage("coding");
}
teachingButton.onclick = () => {
    changePage("teaching");
}
otherButton.onclick = () => {
    changePage("other");
}

const changePage = (page) => {
    if (page === "coding") {
        codingPage.style.display = "block";
        teachingPage.style.display = "none";
        otherPage.style.display = "none";

        codingButton.style.backgroundColor = "#c4c4c4";
        teachingButton.style.backgroundColor = "white";
        otherButton.style.backgroundColor = "white";
    } else if (page === "teaching") {
        codingPage.style.display = "none";
        teachingPage.style.display = "block";
        otherPage.style.display = "none";

        codingButton.style.backgroundColor = "white";
        teachingButton.style.backgroundColor = "#c4c4c4";
        otherButton.style.backgroundColor = "white";
    } else if (page === "other") {
        codingPage.style.display = "none";
        teachingPage.style.display = "none";
        otherPage.style.display = "block";

        codingButton.style.backgroundColor = "white";
        teachingButton.style.backgroundColor = "white";
        otherButton.style.backgroundColor = "#c4c4c4";
    } else {
        console.log("Error input for changePage function");
    }
};

changePage("coding");