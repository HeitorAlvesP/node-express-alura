import "dotenv/config";
import app from "./src/app.js";

app.listen(3000,() => {
    console.log('Porta 3000')
})