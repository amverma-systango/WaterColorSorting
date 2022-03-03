if("serviceWorker" in navigator){
navigator.serviceWorker.register("./serviceWorker.js").then((response) =>{
    console.log("SW registered!");
    console.log(registration);
}).catch(error=>{
  console.log("SW Registration Failed");
  console.log(error);
});
}
     