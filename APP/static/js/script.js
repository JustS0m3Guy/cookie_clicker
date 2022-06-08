document.addEventListener("DOMContentLoaded", ready);

function ready()
{
    var thecookie = document.querySelector("#cookie");
    thecookie.addEventListener("click", bakecookie);
}

function bakecookie()
{
    let cookie_number = document.querySelector("#cookie_number").value;
    cookie_number++;
    document.querySelector("#cookie_number").value = cookie_number;
}