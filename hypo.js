const inputs=document.querySelectorAll(".vaule-of-triangle");
const HypoBtn=document.querySelector("#calculateHypo");
const outputValue=document.querySelector("#message");

function sumOfsides(side1,side2){
    const sum= Math.sqrt(Math.pow(side1,2)+Math.pow(side2,2));
     //const sum= math.sqrt(((side1)*(side2)+(side2)*(side2));
    //const sum= ((side1)*(side2)+(side2)*(side2);
    return sum;

}

function Hypovalue(){
    const sum=sumOfsides(
        Number(inputs[0].value),
        Number(inputs[1].value)
    );
    //const theHypotenyseIs= Math.sqrt(sum);
    outputValue.innerText="The value of hypotenuse is: "+sum;

}
HypoBtn.addEventListener("click",Hypovalue);

