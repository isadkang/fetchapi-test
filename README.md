## Fetch() dan Async/Await dalam JavaScript

File `README.md` ini menjelaskan konsep penggunaan fungsi `fetch()` dan `async/await` dalam JavaScript. Ini memberikan contoh kode untuk menunjukkan cara menggunakan `fetch()` untuk membuat permintaan HTTP dan bagaimana menggunakan `async/await` untuk mengatasi operasi-asinkron.

### Fungsi Fetch()

Fungsi `fetch()` adalah metode JavaScript modern yang digunakan untuk melakukan permintaan jaringan guna mengambil sumber daya seperti data atau berkas dari URL yang ditentukan. Ini biasanya digunakan untuk membuat permintaan HTTP ke server dan mengelola data tanggapan.

Dalam kode Anda, Anda menggunakan `fetch()` untuk mengirim permintaan POST ke URL "https://reqres.in/api/users" dengan muatan JSON yang berisi alamat email dan nama depan.

```javascript
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
```

Berikut adalah penjelasan kode:

1. `fetch(endpoint, { method, body })` mengirim permintaan POST ke URL yang ditentukan (`endpoint`) dengan metode HTTP yang ditentukan (`POST`) dan data JSON dalam tubuh permintaan.

2. `.then(res => res.json())` memproses tanggapan dengan mengonversinya ke JSON. Ini adalah langkah penting saat bekerja dengan tanggapan API.

3. `.then(({ data }) => console.log(data))` mengekstrak properti `data` dari tanggapan JSON dan mencetaknya ke konsol.

### Async/Await

Syntax `async/await` dalam JavaScript digunakan untuk mengatasi operasi-asinkron dengan cara yang lebih bersifat sinkronis dan mudah dibaca. Kata kunci `async` digunakan untuk mendefinisikan fungsi asinkron, dan `await` digunakan untuk menghentikan eksekusi fungsi hingga janji (promise) terselesaikan.

Dalam kode Anda, Anda memiliki fungsi `async` `hitAPI()` yang menggunakan `await` untuk membuat permintaan asinkron `fetch()` ke URL yang sama.

```javascript
async function hitAPI() {
    const api = await fetch(endpoint)
    console.log(api)
    const { data } = await api.json()
    console.log(data);
}

hitAPI()
```

Berikut adalah cara `async/await` berfungsi dalam kode ini:

1. `async function hitAPI()` mendefinisikan fungsi asinkron.

2. `const api = await fetch(endpoint)` membuat permintaan GET asinkron menggunakan `fetch()`. Kode ini menunggu tanggapan untuk diselesaikan sebelum melanjutkan.

3. `console.log(api)` mencetak objek tanggapan, yang berisi informasi tentang tanggapan HTTP.

4. `const { data } = await api.json()` mengekstrak properti `data` dari tanggapan JSON, dan kata kunci `await` memastikan bahwa eksekusi menunggu data JSON diurai.

5. `console.log(data)` mencetak data yang diekstrak ke konsol.

Baris terakhir `hitAPI()` memanggil fungsi `hitAPI` untuk memulai operasi asinkron.

Menggunakan `async/await` bersama dengan `fetch()` memudahkan penanganan operasi-asinkron, membuat kode lebih mudah dibaca dan dijaga.
