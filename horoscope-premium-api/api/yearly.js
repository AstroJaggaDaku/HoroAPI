import handlerDaily from "./daily.js";

export default async function handler(req,res){
  req.query.period="yearly";
  return handlerDaily(req,res);
}
