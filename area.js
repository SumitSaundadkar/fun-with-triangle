const baseAndHeight=document.querySelectorAll(".vaule-of-triangle");
const checkButton=document.querySelector("#calculateHypo");
const outputValue=document.querySelector("#message");


checkButton.addEventListener("click", function area() {
    const base = Number(baseAndHeight[0].value);
    const height = Number(baseAndHeight[1].value);
    const areaOfTriangle = calculateArea(base, height);

    outputValue.innerText = "The Area of the given triangle is " + areaOfTriangle +  " sq.cm"

})

function calculateArea(base, height) {
    return 0.5 * base * height;
}