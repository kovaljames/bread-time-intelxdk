var push = PushNotification.init({
    android: {
        senderID: "956415811411"
    },
    ios: {
        alert: "true",
        badge: "true",
        sound: "true"
    },
    windows: {}
});

push.on('registration', function(data) {
    data.registrationId
});

push.on('notification', function(data) {
    data.message,
    data.title 
    // data.count,
    // data.sound,
    // data.image,
    // data.additionalData
});

push.on('error', function(e) {
    e.message
});