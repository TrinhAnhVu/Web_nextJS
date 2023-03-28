/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  env:{
    "BASE_URL": "https://web-next-js-rust.vercel.app/",
    "MONGODB_URL": "mongodb+srv://anhvu6288:oRd1S2UX0bc6iYOn@cluster0.eigpmsx.mongodb.net/nextjs_ecommerce?retryWrites=true&w=majority",
    "ACCESS_TOKEN_SECRET": "anhvu62886446059869643916",
    "REFRESH_TOKEN_SECRET": "anhvu6288secret34804194rere065153524",
    "PAYPAL_CLIENT_ID": "AQIg-p-KHZBS99gGe4Ghjh_WFd66Dt-Rkg_USj2ees2j2SlPr8__F8pw25bkOTPavQuHgfpCfr1ahY4J",
    "CLOUD_UPDATE_PRESET": "nextjs-store",
    "CLOUD_NAME": "anhvu-chanel",
    "CLOUD_API": "https://api.cloudinary.com/v1_1/anhvu-chanel/image/upload"
  }
}
