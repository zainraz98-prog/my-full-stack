const btn = document.getElementById('fetchBtn');
const output = document.getElementById('output');

// Replace this with your actual Vercel Backend URL later
const API_URL = "https://my-full-stack-six.vercel.app/";

btn.addEventListener('click', async () => {
    output.innerText = "Loading...";
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        output.innerText = data.message + " at " + data.timestamp;
    } catch (err) {
        output.innerText = "Error connecting to PHP backend.";
    }
});