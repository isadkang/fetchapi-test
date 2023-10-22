console.log("Ok, data on going");

const endpoint = "https://pokeapi.co/api/v2/ability/";

async function getData() {
    const api = await fetch(endpoint);
    const data  = await api.json();

    const ability = data.results.map((res) => res.name);
    console.log(ability);
}

getData();
