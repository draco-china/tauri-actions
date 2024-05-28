const sharp = require('sharp')

sharp("Ai.svg").resize(32, 32).png().toFile("./src-tauri/icons/32x32.png")
sharp("Ai.svg").resize(128, 128).png().toFile("./src-tauri/icons/128x128.png")
sharp("Ai.svg").resize(256, 256).png().toFile("./src-tauri/icons/128x128@2x.png")
sharp("Ai.svg").resize(512, 512).png().toFile("./src-tauri/icons/icon.png")
sharp("Ai.svg").resize(30, 30).png().toFile("./src-tauri/icons/Square30x30Logo.png")
sharp("Ai.svg").resize(44, 44).png().toFile("./src-tauri/icons/Square44x44Logo.png")
sharp("Ai.svg").resize(71, 71).png().toFile("./src-tauri/icons/Square71x71Logo.png")
sharp("Ai.svg").resize(89, 89).png().toFile("./src-tauri/icons/Square89x89Logo.png")
sharp("Ai.svg").resize(107, 107).png().toFile("./src-tauri/icons/Square107x107Logo.png")
sharp("Ai.svg").resize(142, 142).png().toFile("./src-tauri/icons/Square142x142Logo.png")
sharp("Ai.svg").resize(150, 150).png().toFile("./src-tauri/icons/Square150x150Logo.png")
sharp("Ai.svg").resize(284, 284).png().toFile("./src-tauri/icons/Square284x284Logo.png")
sharp("Ai.svg").resize(310, 310).png().toFile("./src-tauri/icons/Square310x310Logo.png")
sharp("Ai.svg").resize(50, 50).png().toFile("./src-tauri/icons/StoreLogo.png")
sharp("Ai.svg").resize(256, 256).toFile("./src-tauri/icons/icon.ico")
sharp("Ai.svg").resize(1024, 1024).toFile("./src-tauri/icons/icon.icns")



