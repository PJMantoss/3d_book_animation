function bookOpen(){
    let page = document.getElementsByClassName("page");
    let index = page.length;

    page[index - 1].style.transform = "rotateY(180deg)";
    page[index - 1].style.boxShadow = "0 0 8px #fff";
    page[index - 2].style.boxShadow = "0 0 8px #fff";
    page[index - 3].style.boxShadow = "0 0 8px #fff";
    page[index - 4].style.boxShadow = "0 0 8px #fff";
    page[index - 5].style.boxShadow = "0 0 8px #fff";
    page[index - 6].style.boxShadow = "0 0 8px #fff";

    setTimeout(() => {}, 400);
}