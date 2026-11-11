const backButton=document.getElementById('backButton');

backButton.addEventListener('click',()=>{
  if(window.history.length>1) window.history.back();
  else window.location.href='index.html';
});
