const axios = require('axios');

async function getRazerGoldBalance() {
  const config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://gold.razer.com/api/gold/balance',
    headers: { 
      'authority': 'gold.razer.com', 
      'accept': 'application/json, text/plain, */*', 
      'accept-language': 'en-US,en;q=0.8', 
      'cookie': 'RazerIDLanguage=en; RazerGoldUserLang=en; RazerGoldWalletCreatePrompt_RZR_077028814f33b2df19f08d8d1578=true; ftr_blst_1h=1692072269156; forterToken=1e95cffd2c054a708c7d1b5a8cdd28d2_1692072286035_42_UDF9b_15ck', 
      'referer': 'https://gold.razer.com/global/en', 
      'sec-ch-ua': '"Not/A)Brand";v="99", "Brave";v="115", "Chromium";v="115"', 
      'sec-ch-ua-mobile': '?0', 
      'sec-ch-ua-platform': '"Windows"', 
      'sec-fetch-dest': 'empty', 
      'sec-fetch-mode': 'cors', 
      'sec-fetch-site': 'same-origin', 
      'sec-gpc': '1', 
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36', 
      'x-razer-accesstoken': '60249fa4d007840f358b4f91571b4b1399aaff02', 
      'x-razer-razerid': 'RZR_0770569f4d998399e37861996e8c'
    }
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Usage

  const express = require('express')
  const app = express()
  app.get('/',(req,res)=>{
    getRazerGoldBalance()
  .then((data) => {
    res.status(200).json({data})
  })
  .catch((error) => {
    console.error(error);
  });

  })
  app.listen(3000,()=>{
    console.log(`app is running`)
  })