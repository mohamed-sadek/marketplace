import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import axios from "axios";
import path from "path";
const serve = require("koa-static");

const env = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;

const config = {
  port: port,
  isDevelopment: env === "development",
  env,
};

const app = new Koa();

app.use(cors());

const router = new Router();

router.get("/catalog/list", async (ctx) => {
  try {
    const response = await axios.get("https://api.up42.com/marketplace/blocks");
    const list = response.data.data;

    if (!list.length) {
        ctx.body = [];
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
  ctx.body = simplifiedList;
  } catch (error) {
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = {
      message: error.message || "An error occured when fetching data"
    };
  }
    
});

app.use(router.routes()).use(router.allowedMethods());
app.use(serve(path.resolve(__dirname, "./build")));

app.listen(config.port, () => {
  console.info(`Started: PORT: ${config.port} | ENV: ${config.env}`);
});