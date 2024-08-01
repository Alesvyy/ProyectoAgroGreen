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
    const lacteos = mongoose.model('lacteo');
    console.log('lacteos', lacteos);

    const test = await lacteos.find();
    console.log(test);
}

loadData();

