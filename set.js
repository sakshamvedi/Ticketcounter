const d = new Date();

let x = document.getElementById("date")
let z = document.getElementById("saving")
let y  = document.getElementById("count")
x.innerText =  d.getFullYear()

let i = 0;
function sets()
{
    i=i+1;
    y.innerText = i
}
function save()
{
    let sav = i + "-";

    z.innerText  = z.innerText + sav
   
}