const NAKSHATRAS=[
 "Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra",
 "Punarvasu","Pushya","Ashlesha","Magha","Purva Phalguni","Uttara Phalguni",
 "Hasta","Chitra","Swati","Vishakha","Anuradha","Jyeshtha",
 "Mula","Purva Ashadha","Uttara Ashadha","Shravana","Dhanishta",
 "Shatabhisha","Purva Bhadrapada","Uttara Bhadrapada","Revati"
];

export function nakshatraInfo(){
 const d=new Date();
 const idx=(d.getDate()+d.getMonth())%27;
 const moonPhase=["New Moon","Waxing","Full Moon","Waning"][d.getDate()%4];
 return {
   nakshatra:NAKSHATRAS[idx],
   moon_phase:moonPhase
 };
}
