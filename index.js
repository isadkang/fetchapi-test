const endpoint = 'https://dummyjson.com/products'

async function getData(){
    try {
        const response = await fetch(endpoint)

        const data = await response.json()
        
        const tbody = document.querySelector('#table tbody')
        tbody.innerHTML = ''

        data.products.map((results) => {

            console.log(results)
            tbody.innerHTML += `
                <tr>
                    <td>${results.id}</td>
                    <td>${results.title}</td>
                    <td>${results.brand}</td>
                    <td>${results.category}</td>
                </tr>
            `
        })
    } catch (err) {
        console.error('Terjadi Kesalahan', err.message)
    }
}

getData()