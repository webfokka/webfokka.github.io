/* =========================================================
   РЕФЕРАЛЬНЫЕ ССЫЛКИ
   Замените "#" на свою реферальную ссылку каждого обменника.
========================================================= */
const REF_LINKS = {
  avanchange:"#","24exchange":"#",cashalot:"#","1online":"#",wirebit:"#",dimmarex:"#",
  safelychange:"#",depo:"#",bitrocket:"#",echange:"#",shopokursu:"#",aztecgold:"#"
};
document.querySelectorAll(".ref[data-key]").forEach(a=>{
  const url=REF_LINKS[a.dataset.key];
  if(url && url!=="#"){ a.href=url; a.target="_blank"; a.rel="noopener nofollow"; }
});

/* декоративные элементы без реакции на клик */
document.addEventListener("click",e=>{
  const el=e.target.closest("a,button");
  if(!el) return;
  if(el.classList.contains("ref")) return;
  if(el.tagName==="A" && el.getAttribute("href")==="#") e.preventDefault();
  if(el.classList.contains("deco")) e.preventDefault();
});

/* --------- живые курсы (CoinGecko) --------- */
const two=n=>n.toLocaleString("ru-RU",{minimumFractionDigits:2,maximumFractionDigits:2});
const int=n=>Math.round(n).toLocaleString("ru-RU");
function applyRates(d){
  const map={btc:"bitcoin",ltc:"litecoin",usdt:"tether"};
  document.querySelectorAll(".js-rate").forEach(el=>{
    const src=d[map[el.dataset.base]]; if(!src) return;
    let v=src[el.dataset.vs]; if(v==null) return;
    v*=parseFloat(el.dataset.mult||"1");
    el.textContent = el.dataset.dec==="2" ? two(v) : int(v);
  });
}
async function loadRates(){
  try{
    const r=await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,litecoin,tether&vs_currencies=rub,uah");
    if(!r.ok) throw 0;
    applyRates(await r.json());
    const u=document.getElementById("upd"); if(u) u.textContent=new Date().toLocaleTimeString("ru-RU");
  }catch(_){}
}
function tick(){
  const t=new Date().toLocaleTimeString("ru-RU");
  const c=document.getElementById("clock"); if(c) c.textContent=t;
  const m=document.getElementById("mtime"); if(m) m.textContent=t.slice(0,5);
}
tick(); setInterval(tick,1000);
loadRates(); setInterval(loadRates,60000);
