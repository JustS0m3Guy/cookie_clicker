document.addEventListener("DOMContentLoaded", ready);

async function ready()
{
    var thecookie = document.querySelector("#cookie");
    thecookie.addEventListener("click", bakecookie);
    for (let i = 1; i < 2; i++) {
        await new Promise((r) => setTimeout(r, 30000));
        console.log("saved");
        i = 0
    }
}

function bakecookie()
{
    let cookie_number = document.querySelector("#cookie_number").value;
    cookie_number++;
    document.querySelector("#cookie_number").value = cookie_number;
    document.querySelector("#cookie_number_div").innerHTML = "number of cookies: "+ cookie_number;
}