import {read} from "../DAL/dal.js";


export const checkAdmin = async (req, res, next) => {
    const date = await read('./users.json');
    const arr_users = date.users
    const requestID = arr_users.findIndex((e) => e.id === Number(req.body.id))
    arr_users[requestID].isAdmin === "true" ? res.locals.user = true : null 
    next() 
    
}

