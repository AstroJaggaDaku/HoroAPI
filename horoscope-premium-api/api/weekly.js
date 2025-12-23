import handlerDaily from "./daily.js";

export default async function handler(req,res){
  req.query.period="weekly";
  return handlerDaily(req,res);
}
