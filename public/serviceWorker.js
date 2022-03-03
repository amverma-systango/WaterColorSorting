self.addEventListener("install", e => {
    e.waitUntil(caches.open("static").then(cache => {
return cache.addAll([
            // design
            "./design/AssignmentProject_1.fig",
            // CSS
            "./Static/Css/gameSelectionStyle.css",
            "./Static/Css/indexStyle2.css",
            "./Static/Css/loginStyle2.css",
            "./Static/Css/playGameStyle2.css",
            "./Static/Css/registrationStyle.css",
            "./Static/Css/ruleStyle2.css",
            "./Static/Css/scoreStyle2.css",
            // Background Images
            "./Static/Images/BackGrounds/BG1.png",
            "./Static/Images/BackGrounds/BG1@2x.png",
            "./Static/Images/BackGrounds/BG1@3x.png",
            "./Static/Images/BackGrounds/themeBackGround.png",
            // Icon Images
            "./Static/Images/Icons/dark.png",
            "./Static/Images/Icons/light.png",
            "./Static/Images/Icons/music.png",
            "./Static/Images/Icons/no_music.png",
            //Logo Images
            "./Static/Images/Logo/Logo192@1x.png",
            "./Static/Images/Logo/Logo512@1x.png",
            "./Static/Images/Logo/LogoImage@1x.png",
            "./Static/Images/Logo/LogoImage@2x.png",
            "./Static/Images/Logo/LogoImage@3x.png",
            // js files
            "./Static/Js/extraFeatures.js",
            "./Static/Js/levelRandamization.js",
            "./Static/Js/levels.js",
            "./Static/Js/main.js",
            //music file
            "./Static/Music/music1.mp3",
            //Html Files inside Templates folder
            "./Templates/gameSelection.html",
            "./Templates/login2.html",
            "./Templates/playGame2.html",
            "./Templates/registration.html",
            "./Templates/rule2.html",
            "./Templates/score2.html",
            // Main Html file
            "./index.html",
            //PWA files
            "./manifest.json",
            "./index.js",
            "./serviceWorker.js",
            //README file
            "./README.md",
            //Bootstrap CDN
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
            "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        ]);
    })

    );
});
self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    );
});