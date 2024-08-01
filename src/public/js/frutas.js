import mongoose from 'mongoose';

// const loadData = async () => {
//     console.log('LOAD DATA');
//     await fetch('/frutas') 
//     .then(response => response.json()) 
//     .then((data, index) => { 
//         // Display users in the HTML 
//         data.forEach(item => { 
//             console.log('data', index, item);
//         }); 
//     }); 
// };

// loadData();




const loadData = async () => {
    const frutas = mongoose.model('fruta');
    console.log('frutas', frutas);

    const test = await frutas.find();
    console.log(test);
}

loadData();

