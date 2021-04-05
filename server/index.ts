import express from "express";
import cors from "cors";
import passport from "passport"
import bodyParser from "body-parser"

import auth from "./src/auth"
import routes from "./src/routes"
import stripe from "./src/common/stripe"

auth(passport)
const router = routes(express, passport, stripe)

const app = express();
app.use(cors())
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', router);

app.listen(5000);
