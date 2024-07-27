const app = require('./app')
const PORT = 4000;





app.listen(PORT, ()=>{
    console.log(`Server ins running at http://localhost:${PORT}`);
});