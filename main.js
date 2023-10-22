console.log('OK');

const endpoint = "https://reqres.in/api/users"

fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify({
        email: 'aaa@gmail.com',
        firstName: 'Hehhe',
    })
})
    .then(res => res.json())
    .then(({ data }) => console.log(data))

async function hitAPI() {
    const api = await fetch(endpoint)
    console.log(api)
    const { data } = await api.json()
    console.log(data);
}

hitAPI()