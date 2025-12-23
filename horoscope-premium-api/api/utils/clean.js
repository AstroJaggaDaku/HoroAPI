export function clean(text=""){
  return text
    .replace(/<[^>]+>/g," ")
    .replace(/read the full.*?here:?/gi,"")
    .replace(/copyright.*$/gi,"")
    .replace(/https?:\/\/\S+/gi,"")
    .replace(/\s{2,}/g," ")
    .trim();
}
