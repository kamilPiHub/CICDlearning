async function fetchGreeting() {
    try {
        const response = await fetch('http://127.0.0.1:5000/');
        if (!response.ok) throw new Error(`Błąd HTTP: ${response.status}`);
        
        const data = await response.json();
        console.log(data.message);
        
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

fetchGreeting();