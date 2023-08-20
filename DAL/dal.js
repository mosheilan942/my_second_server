import * as all_express from "express";
import morgan from 'morgan';
const router = all_express.Router();
const app = all_express.default();
app.use(all_express.json());
import jsonfile from 'jsonfile';



app.use(all_express.json());


async function read(path) {
    let obj = await jsonfile.readFileSync(path)
    return obj
  }
   
async function write(file, obj) {
      let newfile = jsonfile.writeFileSync(file, obj);
      return newfile;
  };


export {read, write}