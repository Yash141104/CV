const localData = JSON.parse(localStorage.getItem("cvData"));

if(localData){
  document.querySelector("h1").innerText = localData.name;
  document.querySelector("h2").innerText = localData.title;
}
