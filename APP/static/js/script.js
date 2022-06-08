document.addEventListener('DOMContentLoaded', ready);

// ez csak annyi hogy kiszedi a csrftokent ami kell a djangonak az authentikaciohoz
const getToken = () => {
    return document.cookie
        .split(';')
        .find((x) => x.includes('csrftoken'))
        .split('=')[1];
};

// ez csak egy wrapper a post request elkuldesenek
const post = async (urL, payload = {}) => {
    const response = await fetch(urL, {
        method: 'POST',
        headers: {
            // ebbe a headerbe bele kell irni a csrftoken-t
            'X-CSRFToken': getToken(),
        },
        body: JSON.stringify(payload), // ez pedig stringet csinal a payload objectbol
    });
    // basic error handling
    if (!response.ok) alert('shit happened');
};
let cookie_number
let grandma_cost
let factory_cost
async function ready() {
    grandma_cost = Math.round(100*(1.15**parseFloat(document.querySelector("#grandmanumber").value)));
    factory_cost = Math.round(1000*(1.15**parseFloat(document.querySelector("#factorynumber").value)));
    document.getElementById('buy_grandmas').innerHTML = "Buy a grandma for "+ grandma_cost;
    document.getElementById('buy_factories').innerHTML = "Buy a factory for "+ factory_cost;
    //setInterval(save, 30_000);
    var thecookie = document.querySelector('#cookie');
    thecookie.addEventListener('click', bakecookie);
    document.getElementById('buy_grandmas').addEventListener('click', buygrandma);
    document.getElementById('buy_factories').addEventListener('click', buyfactory);
    document.getElementById('submit')?.addEventListener('click', save);
}

function bakecookie() {
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    let cookie_increase = 1;
    if (document.querySelector('#cpsu1').value == "True")
    {
        cookie_increase = cookie_increase + 1;
    }
    if (document.querySelector('#cpsu2').value == "True")
    {
        cookie_increase = cookie_increase + 3;
    }
    if (document.querySelector('#cpsu3').value == "True")
    {
        cookie_increase = cookie_increase + 5;
    }
    if (document.querySelector('#cpsu4').value == "True")
    {
        cookie_increase = cookie_increase + 15;
    }
    cookie_number = cookie_number + cookie_increase;
    document.querySelector('#newcookienumber').value = cookie_number;
    document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
}

function buygrandma() {
    grandma_cost = Math.round(100*(1.15**parseFloat(document.querySelector("#grandmanumber").value)));
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    if (cookie_number < grandma_cost)
    {
        alert("You don't have enough cookies!");
    }
    else
    {
        let grandma_number = document.querySelector('#grandmanumber').value;
        grandma_number = +grandma_number + 1;
        document.querySelector('#grandmanumber').value = grandma_number;
        document.querySelector('#grandma_number_div').innerHTML = 'number of grandmas: ' + grandma_number;
        cookie_number = cookie_number - grandma_cost;
        document.querySelector('#newcookienumber').value = cookie_number;
        document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
        document.getElementById('buy_grandmas').innerHTML = "Buy a grandma for "+ grandma_cost;
    }
}

function buyfactory() {
    factory_cost = Math.round(1000*(1.15**parseFloat(document.querySelector("#factorynumber").value)));
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    if (cookie_number < factory_cost)
    {
        alert("You don't have enough cookies!");
    }
    else
    {
        let factory_number = document.querySelector('#factorynumber').value;
        factory_number = +factory_number + 1;
        document.querySelector('#factorynumber').value = factory_number;
        document.querySelector('#factory_number_div').innerHTML = 'number of grandmas: ' + factory_number;
        cookie_number = cookie_number - factory_cost;
        document.querySelector('#newcookienumber').value = cookie_number;
        document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
        document.getElementById('buy_factories').innerHTML = "Buy a factory for "+ factory_cost;
    }
}
// ez akkor van meghivva amikor save megnyomodik
const save = () => {
    // ezek az ID-jai az inputoknak
    const params = [
        'newcookienumber',
        'grandmanumber',
        'factorynumber',
        'cpsu1',
        'cpsu2',
        'cpsu3',
        'cpsu4',
        'levelnumber',
    ];
    const payload = {};
    // itt a payload kulcsnak odaadja az inupt ID-jat, erteknek pedig a tartalmat
    for (const param of params) payload[param] = document.querySelector('#' + param).value;
    // it elkuldi (nem kell awaitelni, nem csinal semmit ha jon response)
    post('/', payload);
};