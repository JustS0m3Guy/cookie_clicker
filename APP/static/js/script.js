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
let totalexp
async function ready() {
    grandma_cost = Math.round(100*(1.15**parseFloat(document.querySelector("#grandmanumber").value)));
    document.getElementById('buy_grandmas').innerHTML = "Buy a grandma for "+ grandma_cost;

    factory_cost = Math.round(1000*(1.15**parseFloat(document.querySelector("#factorynumber").value)));
    document.getElementById('buy_factories').innerHTML = "Buy a factory for "+ factory_cost;

    totalexp = parseFloat(document.querySelector("#grandmanumber").value);

    setInterval(save, 30_000);
    setInterval(cookies_baked_ps, 1_000);

    document.getElementById('buy_grandmas').addEventListener('click', buygrandma);
    document.getElementById('buy_factories').addEventListener('click', buyfactory);
    document.getElementById('clickupgrade_1').addEventListener('click', buyclickupgrade1);
    document.getElementById('clickupgrade_2').addEventListener('click', buyclickupgrade2);
    document.getElementById('clickupgrade_3').addEventListener('click', buyclickupgrade3);
    document.getElementById('clickupgrade_4').addEventListener('click', buyclickupgrade4);

    document.querySelector('#cookie').addEventListener('click', bakecookie);
    document.getElementById('submit')?.addEventListener('click', save);
}

function bakecookie() {
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    totalexp = parseFloat(document.querySelector("#experiencenumber").value);
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
    totalexp = totalexp + cookie_increase;
    document.querySelector('#newcookienumber').value = cookie_number;
    document.querySelector('#experiencenumber').value = totalexp;
    document.getElementById('cookies_per_click').innerHTML = "cookies per click: "+ cookie_increase;
    document.querySelector('#cookie_number_div').innerHTML = "number of cookies: " + cookie_number;
}

function buyclickupgrade1() {
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    let cps1 = document.getElementById('cpsu1').value;
    if (cps1 == "False" && !(cookie_number < 100))
    {
        cookie_number = cookie_number - 100;
        document.getElementById('cpsu1').value = "True";
        document.querySelector('#newcookienumber').value = cookie_number;
        document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
    }
    else
    {
        alert("You don't have enough cookies, or you have already bought the upgrade!");
    }
}

function buyclickupgrade2() {
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    let cps2 = document.getElementById('cpsu2').value;
    if (cps2 == "False" && !(cookie_number < 500))
    {
        cookie_number = cookie_number - 500;
        document.getElementById('cpsu2').value = "True";
        document.querySelector('#newcookienumber').value = cookie_number;
        document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
    }
    else
    {
        alert("You don't have enough cookies, or you have already bought the upgrade!");
    }
}

function buyclickupgrade3() {
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    let cps3 = document.getElementById('cpsu3').value;
    if (cps3 == "False" && !(cookie_number < 5000))
    {
        cookie_number = cookie_number - 5000;
        document.getElementById('cpsu3').value = "True";
        document.querySelector('#newcookienumber').value = cookie_number;
        document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
    }
    else
    {
        alert("You don't have enough cookies, or you have already bought the upgrade!");
    }
}

function buyclickupgrade4() {
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    let cps4 = document.getElementById('cpsu4').value;
    if (cps4 == "False" && !(cookie_number < 10000))
    {
        cookie_number = cookie_number - 10000;
        document.getElementById('cpsu4').value = "True";
        document.querySelector('#newcookienumber').value = cookie_number;
        document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
    }
    else
    {
        alert("You don't have enough cookies, or you have already bought the upgrade!");
    }
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

function cookies_baked_ps() {
    let levelupgrade = 100*(10**parseFloat(document.querySelector("#levelnumber").value));
    cookie_number = parseFloat(document.querySelector('#newcookienumber').value);
    totalexp = parseInt(document.querySelector("#experiencenumber").value);
    let cps_sum = 0;
    cps_sum = cps_sum + document.querySelector('#grandmanumber').value * 1;
    cps_sum = cps_sum + document.querySelector('#factorynumber').value * 15;
    cookie_number = cookie_number+ cps_sum;
    document.querySelector('#newcookienumber').value = cookie_number;
    document.querySelector('#cookie_number_div').innerHTML = "number of cookies: " + cookie_number;
    document.getElementById('cookies_per_second').innerHTML = "cookies per second: "+ cps_sum;
    totalexp = totalexp + cps_sum;
    document.getElementById('experiencenumber').value = totalexp;
    if (levelupgrade <= totalexp)
    {
        document.querySelector("#levelnumber").value++;
        alert("You have leveled up to level "+ document.querySelector("#levelnumber").value)
        document.getElementById('level').innerHTML = "level: "+ document.querySelector("#levelnumber").value;
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
        'experiencenumber',
        'levelnumber',
    ];
    const payload = {};
    // itt a payload kulcsnak odaadja az inupt ID-jat, erteknek pedig a tartalmat
    for (const param of params) payload[param] = document.querySelector('#' + param).value;
    // it elkuldi (nem kell awaitelni, nem csinal semmit ha jon response)
    post('/', payload);
};