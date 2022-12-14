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
    page[index - 7].style.boxShadow = "0 0 8px #fff";
    page[index - index].style.boxShadow = "2px 3px 1px #fff";

    setTimeout(() => {
        page[index - 2].style.transform = "rotateY(-179deg)";
    }, 400);

    setTimeout(() => {
        page[index - 3].style.transform = "rotateY(-178deg)";
    }, 800);

    setTimeout(() => {
        page[index - 4].style.transform = "rotateY(-176deg)";
    }, 1200);

    setTimeout(() => {
        page[index - 5].style.transform = "rotateY(-174deg)";
    }, 1600);

    setTimeout(() => {
        page[index - 6].style.transform = "rotateY(-172deg)";
    }, 2000);

    setTimeout(() => {
        page[index - 7].style.transform = "rotateY(-60deg)";
    }, 2400);
}