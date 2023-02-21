import { Handler } from '@netlify/functions'
import axios from "axios";

export const handler: Handler = async (event, context) => {

const response = await axios.get("https://api.up42.com/marketplace/blocks");
    const list = response.data.data;

    if (!list.length) {
      return {
        statusCode: 200,
        body: JSON.stringify([]),
      }
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

  return {
    statusCode: 200,
    body: JSON.stringify(simplifiedList),
  }
}
