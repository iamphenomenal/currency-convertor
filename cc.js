const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdown= document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const from=document.querySelector(".from select");
const to=document.querySelector(".to select");
const mssg=document.querySelector("form .msg")


for (let select of dropdown){
    for(code in countryList){
    let newOption= document.createElement("option");
    newOption.innerText=code;
    newOption.value=code;
    select.append(newOption);
}
select.addEventListener("change",(evt)=>{
    updateflag(evt.target);

})
}
const updateflag=(element)=>
{
let currcode=element.value;
let countrycode= countryList[currcode];
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img= element.parentElement.querySelector("img");
 img.src=newsrc;







};
btn.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount = document.querySelector(" .amount input")
    let amt=amount.value;
    if(amt===""|| amt<1){
        amt=1;
        amount.value="1";
    }
    const URL=`${base_url}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data= await response.json();
    let rate= data[to.value.toLowerCase()];
    console.log(rate);
    let finalamt=amt*rate;
    mssg.innerHTML=`${amt}${from.value}=${finalamt}${to.value}`;


    


    



});
