import { config } from 'dotenv';
config();

// Paypal
export const PAYPAL_API_CLIENT =
  'AQFDDA2wfkZo--4K-yIxq2_4y5WR36O_tdCq4-klaQrxDgf-pB_HvV5OuT-7xp7yMk7wCgBoiCjJIu0o';
export const PAYPAL_API_SECRET =
  'EBKWRc_BnXdrgD4XIujjXkPf4B2QOsJdGVnHZ0VHAbIEBQWCgSGjsNXf-NuIpretaoTFY4Fc0HlD14Ue';
export const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // url sandbox or live for your app

// Server
export const PORT = process.env.PORT || 3000;
export const HOST =
  process.env.NODE_ENV === 'production'
    ? process.env.HOST
    : 'http://localhost:' + PORT;
