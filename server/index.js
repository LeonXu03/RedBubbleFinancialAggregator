import express from 'express'; // framework for APIs
import bodyParser from 'body-parser'; // parsing data coming in
import mongoose from 'mongoose'; // handling mongoDB calls
import cors from 'cors'; // cross origin resourfe sharing
import dotenv from 'dotenv'; // environment variables
import helmet from 'helmet'; // protecting apis
import morgan from 'morgan'; // logging our api calls
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
//nodeman for live server reload

// data imports
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from './models/ProductStat.js';
import { dataUser, dataProduct, dataProductStat } from "./data/index.js";

// Configuration (boilerplate)
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

// Routes
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes)

// MONGOOSE SETUP 
const PORT = process.env.PORT || 9000;
mongoose.connect(process.env.MONGO_URL, {
    // useNewUrlParser: true, //deprecated options 
    // useUnifiedTopology: true, //deprecated options
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // ONLY ADD DATA ONE TIME
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    //ProductStat.insertMany(dataProductStat);
}).catch((error) => console.log(`${error} did not connect`));
