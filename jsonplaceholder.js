async function getData() {
    try {
        const endpoint = 'https://jsonplaceholder.typicode.com/todos'
        const response = await fetch(endpoint)
    
        if (!response.ok) {
            throw new Error('Gagal mengambil data')
        }
    
        const data = await response.json()
        const tbody = document.querySelector('#todo-table tbody')
        tbody.innerHTML = ''
    
        data.forEach(res => {
            tbody.innerHTML += `
                <tr>
                    <td>${res.id}</td>
                    <td>${res.title}</td>
                    <td>${res.completed ? 'Ya' : 'Tidak'}</td>
                </tr>
            `
        });
    } catch(error) {
        console.error('Terjadi kesalahan', error)
    }
}

getData()