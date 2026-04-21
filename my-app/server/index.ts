import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import detailRoute from "./routes/detail_route.js";
import homeRoute from "./routes/home_route.js";

dotenv.config();

const app = express();

const colors = {
    reset: "\x1b[0m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
};

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    const logData = req.method === "GET" ? req.query : req.body;
    
    next();
});
app.get('/piepapi/proxy', (req, res) => {
    res.json({ status: 'ok' })
})

app.use('/piepapi', (req, res, next) => {
    const accept = req.headers.accept || ''
    if (accept.includes('text/html')) {
        return res.status(404).send(`
            <html>
                <body>
                    <h1>404 - Page Not Found</h1>
                    <a href="https://react-web-2bss.vercel.app">Back to home</a>
                </body>
            </html>
        `)
    }
    next()
})
// 👉 mount route
homeRoute(app);
detailRoute(app);
const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});