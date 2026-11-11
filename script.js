const shareButton=document.getElementById('shareButton');
const backButton=document.getElementById('backButton');
const downloadButton=document.getElementById('downloadButton');

shareButton.addEventListener('click',async()=>{
  const shareData={title:document.title,text:'Oglej si galerijo SDG 4 – kakovostno izobraževanje.',url:window.location.href};
  try{
    if(navigator.share) await navigator.share(shareData);
    else if(navigator.clipboard){await navigator.clipboard.writeText(window.location.href);shareButton.textContent='Povezava kopirana ✓';}
  }catch(error){if(error.name!=='AbortError') shareButton.textContent='Deljenje ni uspelo';}
});
backButton.addEventListener('click',()=>{if(window.history.length>1)window.history.back();else window.location.href='index.html';});
downloadButton.addEventListener('click',()=>{
  const images=[...document.querySelectorAll('.tile img')].map(img=>({alt:img.alt,url:img.src}));
  const file=new Blob([JSON.stringify({title:document.title,images},null,2)],{type:'application/json'});
  const url=URL.createObjectURL(file);
  const link=document.createElement('a');link.href=url;link.download='sdg4-galerija.json';link.click();
  URL.revokeObjectURL(url);
});
