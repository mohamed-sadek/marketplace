const express = require("express");
const axios = require("axios");

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/catalog/list', async (req, res) => {
    try {
        const response = await axios.get("https://api.up42.com/marketplace/blocks");
        const list = response.data.data;

        if (!list.length) {
            res.send([])
        }

        const filteredList = list.filter((item) => {
            if (!item.metadata.blockPricingStrategy.name) return false;
            return item.metadata.blockPricingStrategy.name === "simple"
        });

        const simplifiedList = filteredList.map((item) => ({
            id: item.id,
            title: item.displayName,
            price: item.metadata.blockPricingStrategy.credits,
        }))

        res.send(simplifiedList);
    } catch (error) {
        res.status(500);
    }
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`listening on ${PORT}`));