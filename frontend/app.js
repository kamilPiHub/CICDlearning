export async function fetchGreeting() {
    const url = process.env.BACKEND_URL || 'http://localhost:5000/';
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Odebrano:", data.message);
        return data;
    } catch (error) {
        console.error("Błąd połączenia z:", url);
        throw error;
    }
}

if (process.argv[1] && process.argv[1].endsWith('app.js')) {
    fetchGreeting();
}