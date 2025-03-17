import AI from './AI.js';
import Drivers from './Drivers.js';
import * as utils from '../lib/utils.js'


async function runTest() {
//     // Create test instances
    const context = {
        authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoicyIsInYiOiIwLjAuMCIsInUiOiJ1TmNUeXl0WVI5NlZBMGtQbERFY293PT0iLCJ1dSI6IjYrcFpkbGMzU1Fxc1VmcENoU0ZxcEE9PSIsImlhdCI6MTc0MTI0Nzk4M30.iJYa_Avb6iAbfGwvyIywDP8EQnjuMVTCY74q5WZc31A', // You need to provide a valid auth token
        APIOrigin: 'http://api.puter.com',
        appID: 'test-app'
    };

    const aiInstance = new AI(context);
    const driversInstance = new Drivers(context);

    try {
        // Test drivers
        console.log('Testing drivers...');
        const models = await driversInstance.call('puter-chat-completion', 'ai-chat', 'models');
        console.log('Available models:', JSON.stringify(models, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

runTest();


// async function getAvailableModels() {
//     try {
//         // Use the drivers module to call the models endpoint
//         const models = await utils.make_driver_method(
//             [], // No required parameters
//             'puter-chat-completion', 
//             'ai-chat', 
//             'models'
//         ).call(this, {});
        
//         return models;
//     } catch (error) {
//         console.error('Error fetching available models:', error);
//         throw error;
//     }
// }

// getAvailableModels();

// Call the test function
// testGetModels();