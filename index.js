import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import routes from "./routes/index.js";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes);







const URI_CONNECTION = "mongodb+srv://formMogodb:octoib917@cluster0.joxnwbu.mongodb.net/NODE_form?retryWrites=true&w=majority"
mongoose.connect(URI_CONNECTION, { useNewUrlParser:true, useUnifiedTopology: true })

.then(() => app.listen(port, () => {
    console.log(`server running on port ${port}`)
}))
.catch((err) => console.error(err));