const REMEDIES={
 aries:"Offer red flowers to Hanuman on Tuesday.",
 taurus:"Donate food on Friday to seek Venus blessings.",
 gemini:"Chant Vishnu Sahasranama on Wednesday.",
 cancer:"Offer milk to Shiva on Monday.",
 leo:"Recite Aditya Hridaya Stotra on Sunday.",
 virgo:"Feed cows and maintain cleanliness.",
 libra:"Light ghee lamp to Goddess Lakshmi on Friday.",
 scorpio:"Offer red lentils on Tuesday.",
 sagittarius:"Donate yellow clothes on Thursday.",
 capricorn:"Serve the needy on Saturday.",
 aquarius:"Offer water to Peepal tree on Saturday.",
 pisces:"Chant Gayatri Mantra daily."
};

export function remedy(zodiac){
 return REMEDIES[zodiac] || "";
}
