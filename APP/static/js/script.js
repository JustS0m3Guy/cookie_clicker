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

async function ready() {
    document.getElementById('submit')?.addEventListener('click', save);

    // csinalhatsz ilyet - ez cleanebb
    setInterval(save, 30_000);

    var thecookie = document.querySelector('#cookie');
    thecookie.addEventListener('click', bakecookie);
    for (let i = 1; i < 2; i++) {
        await new Promise((r) => setTimeout(r, 30000));
        console.log('saved');
        i = 0;
    }
}

function bakecookie() {
    let cookie_number = document.querySelector('#newcookienumber').value;
    cookie_number++;
    document.querySelector('#newcookienumber').value = cookie_number;
    document.querySelector('#cookie_number_div').innerHTML = 'number of cookies: ' + cookie_number;
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