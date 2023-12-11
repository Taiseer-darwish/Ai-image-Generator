//create Element by js
let container = document.createElement("div");
text = document.createElement("h2");
text.textContent="Ai Image Generator";
outPut = document.createElement("div");
outPut.className="outPutss";
one = document.createElement("div");
one.className="sameStyle";
oneimg = document.createElement("img");
oneimg.src="img/images (3).jpg"
two = document.createElement("div");
two.className="sameStyle";
twoimg = document.createElement("img");
twoimg.src="img/images (2).jpg"
inputDiv = document.createElement("div");
inputDiv.id="inputDiv"
inPut = document.createElement("input");
inPut.type = "text";
inPut.placeholder="Ai";
btn = document.createElement("button");
btn.textContent=" Generate";
btn.id = "myButton";
//append children to their parent & body
container.append(
  text,
  outPut,
  inputDiv);
outPut.append(
 one ,
 two,
);
inputDiv.append(
  inPut,
  btn);
one.append(oneimg);
two.append(twoimg);
document.body.append(container);
//  add style 
const style = document.createElement("style");
style.innerHTML = "* { padding: 0; margin: 0; box-sizing: border-box; justify-content: center; align-items: center;";
document.head.appendChild(style);
container.style.cssText="background-color:#040404e0; text-align: center;  font-family: 'Lilita One', sans-serif; width:100%; min-height: 100vh; margin: auto; ";
text.style.cssText="color:#dfcd98bd;font-size:40px; padding-top:40px; margin-bottom:50px;";
outPut.style.cssText="display: flex;justify-content:center;align-items:center; margin-bottom:20px;";
twoimg.style.cssText="width:250px;height:250px;border-radius:6px;position:absolute;top:0px;left:0px;padding:3px;"
oneimg.style.cssText="width:250px;height:250px;border-radius:6px;position: absolute;top:0px;left:0px;padding:1px;"
inputDiv.style.cssText="display: flex;justify-content: space-between;align-items:center;block;background-color:#04040421;padding:5px;width:60%;margin:auto;border:solid 2px #877f67;box-shadow:rgb(135, 127, 103) 0px -1px 18px 0px, rgb(82, 76, 66) 0px 3px 5px 0px;;border-radius:6px; ";
inPut.style.cssText="background-color:transparent;color:#dfcd98bd; width:73%;font-size:20px; outline: none; border: none;";
btn.style.cssText="background-color:#dfcd98bd;font-size:20px;font-weight:600;padding:3px;outline:none;border:none;border-radius:4px;cursor:pointer;";
const elements = document.getElementsByClassName("sameStyle");
Array.from(elements).forEach(element => {
  element.style.cssText = `
   background-color:#04040421;
   width:250px;
   height:250px;
   margin-left:5px;
   border:solid 2px #877f67;
   border-radius:6px;
   box-shadow:rgb(135, 127, 103) 0px -1px 18px 0px, rgb(82, 76, 66) 0px 3px 5px 0px;
   padding: 100px;
   margin: 10px;
   position: relative;
  `;});

// Get api
const api="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"

//crate a function to make Request & response 
const getPhoto =async ()=> {

    // make Request to openAi
    const response = await fetch("https://api.openai.com/v1/images/generations",
    {method:"POST",
     headers:{
        "Content-Type": "application/json",
        "Authorization": `Bearer ${api}`},
        body:JSON.stringify({
            "prompt":inPut.value,
            "n": 2,
            "size": "256x256" })});

        // convert the response to JSON
        const bhotosdata = await response.json();

      // Remove previous results
         while (outPut.firstChild) {
            outPut.removeChild(outPut.firstChild);
          };
        
        // create photoDiv by add data to the div and url img
        const photos =bhotosdata.data;
        photos.map(el=>{
          let img = document.createElement("img");
          outPut.append(img);
          img.src=el.url;
          img.style.cssText="margin:8px;border-radius:6px; box-shadow:rgb(135, 127, 103) 0px -1px 18px 0px, rgb(82, 76, 66) 0px 3px 5px 0px; ";
        });
        // delet the two div after showing the img
        const elements = document.getElementsByClassName("sameStyle");
        Array.from(elements).forEach(element => {
          element.style.display = "none";
        }); };

// Run the function
btn.addEventListener("click",getPhoto);

// change button color
function after() {
  btn.style.backgroundColor = "#36301c";
}
function befor() {
  btn.style.backgroundColor="#a39775;";
}
const button = document.querySelector("button");
button.addEventListener("mouseenter", after);
button.addEventListener("mouseleave", befor);

// focus 
window.onload = function(){
  inPut.focus();
}

// --------------------------make Responsive --------------------------------------------------------
const mobile= window.matchMedia("(max-width: 350px)");
const tablet = window.matchMedia("(max-width: 570px)");
const mediam = window.matchMedia("(max-width: 800px)");
const large = window.matchMedia("(max-width: 1050px)");

const theResize = () => {
  if (mobile.matches) {
    const heading = document.querySelector("h2");
    const inPutB = document.querySelector("input");
    const divs=  document.querySelector(".outPutss");
    const theinputDiv= document.getElementById("inputDiv");
    heading.style.fontSize = "25px";

    Array.from(divs).forEach((div) => {
        div.style.flexDirection = "column";
      });
      theinputDiv.style.width= "70%";

  } else if (tablet.matches) {
    const heading = document.querySelector("h2");
    const inPutB = document.querySelector("input");
    const divs=  document.querySelector(".outPutss");
    heading.style.fontSize = "30px";
    inPutB.style.width= "30%";
    divs.style.flexDirection = "column";
   
  }else if (mediam.matches) {
    const heading = document.querySelector("h2");
    const inPutB = document.querySelector("input");
    const divs=  document.querySelector(".outPutss");
    heading.style.fontSize = "24px";
    inPutB.style.width= "60%";
    divs.style.flexDirection = "row";
  } else if (large.matches) {
    const heading = document.querySelector("h2");
    const inPutB = document.querySelector("input");
    const divs=  document.querySelector(".outPutss");
    heading.style.fontSize = "24px";
    inPutB.style.width= "60%";
    divs.style.flexDirection = "row";
  }else {
    const heading = document.querySelector("h2");
    const inPutB = document.querySelector("input");
    const divs=  document.querySelector(".outPutss");
    inPutB.style.width= "80%";
    heading.style.fontSize = "35px";
    divs.style.flexDirection = "row";
  }
};

window.addEventListener("resize", theResize);
