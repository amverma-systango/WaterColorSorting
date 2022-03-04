function determineAppServerKey() {
  var vapidPublicKey = 'BPza1bfrN-GvYJzeTk5wmY-_1IR5MQSYmr64rkn1vxXIFYrKF60MQ4gSGzKMoK8HEnG5uaEUvMOKmIBXHthCCvk';
  return urlBase64ToUint8Array(vapidPublicKey);
}


function urlBase64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./serviceWorker.js").then((response) => {
    return response.pushManager.getSubscription().then(function (subscription) {
      return response.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: determineAppServerKey()
      })
    })

  });
}

// to detect the connectivity for the first time when page loaded
window.addEventListener("load", () => {
  hasNetwork(navigator.onLine);
});

//to detect if online 
window.addEventListener("online", () => {
  hasNetwork(navigator.onLine);
});

window.addEventListener("offline", () => {
  hasNetwork(navigator.onLine);
});

function hasNetwork(status) {
  
  if (status === true) {
    document.getElementById("playGameBtn").style.display = "block";
    document.getElementById("playAsGuestBtn").style.display = "none";
    document.getElementById("leaderBoardBtn").style.display = "block";
  } else {
    document.getElementById("playGameBtn").style.display = "none";
    document.getElementById("playAsGuestBtn").style.display = "block";
    document.getElementById("leaderBoardBtn").style.display = "none";
  }
}


document.getElementById("playAsGuestBtn").addEventListener("click", ()=>{
  localStorage.clear();
  localStorage.setItem("userId", 0);
  localStorage.setItem("userName", "Guest");
  localStorage.setItem("userLevel", 1);
  localStorage.setItem("userScore", 0);

  window.location.href = "./Templates/playGame2.html";
});