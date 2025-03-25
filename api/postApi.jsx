import axios from "axios";

const api = axios.create({
    baseURL : " https://v6.exchangerate-api.com/v6/c9770dd5bb4adb71ab6c6857/latest/USD"
});

export const currencyConverter = (fromCurrency, toCurrency ,amount) =>{
    return api.get(`/pair/${fromCurrency}/${toCurrency}/${amount}`);
};