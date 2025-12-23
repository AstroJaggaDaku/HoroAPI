const PLANETS=["Sun","Moon","Mars","Mercury","Jupiter","Venus","Saturn"];

const ZODIAC_FLAVOUR={
 aries:"Action and courage dominate decisions.",
 taurus:"Stability and finances demand attention.",
 gemini:"Communication and learning take focus.",
 cancer:"Emotional balance is important.",
 leo:"Leadership and recognition increase.",
 virgo:"Precision and discipline bring success.",
 libra:"Relationships and harmony matter.",
 scorpio:"Transformation and inner strength grow.",
 sagittarius:"Exploration and wisdom expand.",
 capricorn:"Career discipline strengthens.",
 aquarius:"Innovation and fresh ideas flow.",
 pisces:"Intuition and creativity rise."
};

export function astroMeta(zodiac,period){
 const d=new Date();
 const planet=PLANETS[
   period==="yearly" ? d.getFullYear()%7 :
   period==="monthly" ? d.getMonth()%7 :
   d.getDay()
 ];
 return { planet, flavour:ZODIAC_FLAVOUR[zodiac] };
}

export function luckScore(zodiac,period){
 const seed=zodiac.charCodeAt(0)*11;
 const d=new Date();
 const f=
  period==="weekly"?d.getDay()*9:
  period==="monthly"?(d.getMonth()+1)*13:
  period==="yearly"?d.getFullYear()%100:
  d.getDate()*7;
 return 60+((seed+f)%36);
}
