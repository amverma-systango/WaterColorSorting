if("serviceWorker" in navigator){
navigator.serviceWorker.register("serviceWorker.js").then(registration=>{

    console.log("Service worker Registered!");
    console.log(registration);
}).catch(error=>{

    console.log("service Worker Registrarion Failed!");
    console.log(error);
});



}