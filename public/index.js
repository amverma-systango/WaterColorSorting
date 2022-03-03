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
