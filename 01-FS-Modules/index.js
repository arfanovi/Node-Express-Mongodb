const fs = require('fs');

// write file 
// fs.writeFile('demo.txt', "This is FS Module", 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });




// Rename 
// fs.rename('demo.txt', "demo2.txt", (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Successful');
//     }
// });




// Delete File 
// fs.unlink('demo2.txt',(err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('Success');
//     }
// });





// Exists 
fs.exists('fs.txt', (result) => {
    if(result){
        console.log('Found');
    } else {
        console.log('Not Found');
    }
});