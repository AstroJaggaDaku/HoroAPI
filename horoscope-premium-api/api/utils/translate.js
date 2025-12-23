import fetch from "node-fetch";

export async function translate(text,lang){
 if(lang==="en") return text;
 const url="https://translate.googleapis.com/translate_a/single"+
 "?client=gtx&sl=en&tl="+lang+"&dt=t&q="+encodeURIComponent(text);
 const r=await fetch(url);
 const j=await r.json();
 return j[0].map(i=>i[0]).join("");
}
