import handlerDaily from "./daily.js";

export default async function handler(req,res){
  req.query.period="monthly";
  return handlerDaily(req,res);
}
