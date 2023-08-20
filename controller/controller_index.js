import * as all_express from "express";
import morgan from 'morgan';
import * as DAL from '../DAL/dal.js'


async function getProducts() {
    const date = await DAL.read('./newproducts.json');
    return date
}

async function addProducts(body) {
    const date = await DAL.read('./newproducts.json');
    const products = date
    products.push(body)
    console.log(products);
    const new_products = await DAL.write('./newproducts.json', date);
    return date
}

async function getProductById(id) {
    const date = await DAL.read('./newproducts.json');
    const arr_products = date
    let index = await arr_products.findIndex((e) => e.id === Number(id));
    if (index != -1) {
        return(arr_products[index])
    }
};

async function updateProduct(id, body) {
    const date = await DAL.read('./newproducts.json');
    const arr_products = date
    let index = await arr_products.findIndex((e) => e.id === Number(id));
    const keys = Object.keys(arr_products[index]);
    if (index != -1 && keys.length === 11) {
        let product = arr_products[index]
        let check = keys.forEach((key, index) => {
            if (index != undefined) {
                product[key] = body[key];
            } else {
                return console.log("baaaaad");
            }
        }); 
        const new_product = await DAL.write('./newproducts.json', date);
        return arr_products[index]
    } else {
       return console.log("bobobobobd");
    }
};

async function deleteProductById(id) {
    const date = await DAL.read('./newproducts.json');
    const arr_products = date
    let index = await arr_products.findIndex((e) => e.id === Number(id));
    console.log(index);
    if (index != -1) {
        arr_products.splice(index, 1)
        const new_product = await DAL.write('./newproducts.json', date);
        return(arr_products)
    }
};

async function updateProductQuantity(id, quantity) {
    const date = await DAL.read('./newproducts.json');
    const arr_products = date
    let index = await arr_products.findIndex((e) => e.id === Number(id));
    if (index != -1) {
        arr_products[index].quantity = quantity;
        const new_product = await DAL.write('./newproducts.json', date);
        return(arr_products)
    }
};

export {getProducts, addProducts, getProductById, updateProduct, deleteProductById, updateProductQuantity}