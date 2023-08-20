import * as all_express from "express";
import morgan from 'morgan';
import * as DAL from '../DAL/dal.js'


async function getProducts() {
    const date = await DAL.read('./products.json');
    return date
}

async function addProducts(body) {
    const date = await DAL.read('./products.json');
    const products = date.products
    products.push(body)
    console.log(products);
    const new_products = await DAL.write('./products.json', date);
    return date
}

async function getProductById(id) {
    const date = await DAL.read('./products.json');
    const arr_products = date.products
    // console.log(arr_products);
    let index = await arr_products.findIndex((e) => e.id === Number(id));
    console.log(index);
    if (index != -1) {
        console.log(arr_products[index]);
        return(arr_products[index])
    }
};

async function updateProduct(id, body) {
    const date = await DAL.read('./products.json');
    const arr_products = date.products
    let index = await arr_products.findIndex((e) => e.id === Number(id));
    const keys = Object.keys(arr_products[index]);
    if (index != -1 && keys.length === 12) {
        let check = keys.forEach((key, index) => {
            if (index != undefined) {
                arr_products[index].key = body.key;
            } else {
                console.log("baaaaad");
            }
        });  

    } else {
        console.log("bobobobobd");
    }
};

export {getProducts, addProducts, getProductById, updateProduct}