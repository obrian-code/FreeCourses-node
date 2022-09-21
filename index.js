import { app } from "./server/app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has been initialized: http://localhost:${PORT}`))