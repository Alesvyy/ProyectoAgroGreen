import mongoose from 'mongoose';

const loadData = async () => {
    const verduras = mongoose.model('verdura');
    console.log('verduras', verduras);

    const test = await verduras.find();
    console.log(test);
}

loadData();

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