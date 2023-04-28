// 한번 더 눌렀을 때 색깔 또 바뀌게 하고 싶어
// 빨- 파 빨 파 빨 파 
const h1 = document.querySelector(".hello h1");

h1.innerText= "SEX ON THE BEACH";

console.log(h1);
console.dir(h1);


function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor; 
    if(currentColor === "blue")
        newColor = "tomato";
    else 
        newColor = "blue";

    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick); // h1onclick = handleh1Click; 똑같아 ㅇㅇ 
