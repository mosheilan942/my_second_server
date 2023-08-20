import * as all_express from "express";
import morgan from 'morgan';
import { router as indexRoute } from "./routes/index_routes.js";

const app = all_express.default();
app.use(all_express.json());
const port = 3000;
app.use(morgan('dev'));



async function main() {


await app.use('/api', indexRoute)


app.listen(port, () => {
    console.log(`Server is up and running on port:${port}`);
  });


}


main()