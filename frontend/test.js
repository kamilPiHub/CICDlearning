import { fetchGreeting } from './app.js';

async function runTest() {
    try {
        const data = await fetchGreeting();
        if (data && data.message) {
            console.log("Test zaliczony!");
            process.exit(0);
        }
    } catch (e) {
        console.error("Test nieudany");
        process.exit(1);
    }
}
runTest();