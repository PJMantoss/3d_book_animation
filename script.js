function bookOpen(){
    let page = document.getElementsByClassName("page");
    let index = page.length;

    page[index - 1].style.transform = "rotateY(180deg)";
    page[index - 1].style.boxShadow = "0 0 8px #fff";
}