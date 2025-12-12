import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";
import { nextTick } from "process";
import cors from "cors";

import session from "express-session";
import { v4 as uuidv4 } from "uuid";

import validateEnv from "./utils/validateEnv";
import router from "./router";
import setLangCookie from "./middlewares/setLangCookie";

declare module "express-session" {
  interface SessionData {
    uid: string;
  }
}

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4466;

app.set("trust proxy", 1);

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(cookieParser());
app.use(
  session({
    genid: (req) => uuidv4(),
    secret: "Hi9Cf#mK98",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 2 * 60 * 60 * 1000,
      sameSite: 'lax',
    },
  })
);
app.use(setLangCookie);
app.use(express.json());

app.use(express.static(path.join(__dirname, "../client-build")));

app.use((req, res, next) => {
    console.log(`[REQUEST] ${req.method} ${req.url}`);
    next();
});

app.use(router);


// Log
/*app.post('/v1/user', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.status(201).send('Usuário criado com sucesso');
});*/

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`server runing on ${PORT}`);
});
