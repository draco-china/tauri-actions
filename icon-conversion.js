const sharp = require('sharp');
const fs = require('fs');
const { icns } = require('electron-icns')
const path = require('path')

const icon = "Ai.svg"


function generateTauriIcons() {
  const items = [
    { name: "32x32.png", width: 32, height: 32 },
    { name: "128x128.png", width: 128, height: 128 },
    { name: "128x128@2x.png", width: 256, height: 256 },
    { name: "icon.png", width: 512, height: 512 },
    { name: "Square30x30Logo.png", width: 30, height: 30 },
    { name: "Square44x44Logo.png", width: 44, height: 44 },
    { name: "Square71x71Logo.png", width: 71, height: 71 },
    { name: "Square89x89Logo.png", width: 89, height: 89 },
    { name: "Square107x107Logo.png", width: 107, height: 107 },
    { name: "Square142x142Logo.png", width: 142, height: 142 },
    { name: "Square150x150Logo.png", width: 150, height: 150 },
    { name: "Square284x284Logo.png", width: 284, height: 284 },
    { name: "Square310x310Logo.png", width: 310, height: 310 },
    { name: "StoreLogo.png", width: 50, height: 50 },
    { name: "icon.icns", width: 1024, height: 1024 },
    { name: "icon.ico", width: 256, height: 256 },

  ];
  for (const item of items) {
    if(item.name.includes(".png")) {
      sharp(icon)
      .resize(item.width, item.height)
      .png()
      .toFile(`./src-tauri/icons/${item.name}`);
    }
    if(item.name.includes(".icns")) {
      sharp(icon)
        .resize(item.width, item.height)
        .png()
        .toBuffer()
        .then(buffer => { fs.writeFileSync(`./src-tauri/icons/${item.name}`, buffer); })
    }
    if(item.name.includes(".ico")) {
      sharp(icon)
        .resize(item.width, item.height)
        .toBuffer()
        .then(buffer => { fs.writeFileSync(`./src-tauri/icons/${item.name}`, buffer); })
    }
  }
}

function generateTauriAndroidIcons() {
  const mipmap = [
    {
      density: "hdpi",
      items: [
        { name: "ic_launcher_foreground.png", width: 162, height: 162 },
        { name: "ic_launcher_round.png", width: 49, height: 49 },
        { name: "ic_launcher.png", width: 49, height: 49 },
      ],
    },
    {
      density: "mdpi",
      items: [
        { name: "ic_launcher_foreground.png", width: 108, height: 108 },
        { name: "ic_launcher_round.png", width: 48, height: 48 },
        { name: "ic_launcher.png", width: 48, height: 48 },
      ],
    },
    {
      density: "xhdpi",
      items: [
        { name: "ic_launcher_foreground.png", width: 218, height: 218 },
        { name: "ic_launcher_round.png", width: 96, height: 96 },
        { name: "ic_launcher.png", width: 96, height: 96 },
      ],
    },
    {
      density: "xxhdpi",
      items: [
        { name: "ic_launcher_foreground.png", width: 324, height: 324 },
        { name: "ic_launcher_round.png", width: 144, height: 144 },
        { name: "ic_launcher.png", width: 144, height: 144 },
      ],
    },
    {
      density: "xxxhdpi",
      items: [
        { name: "ic_launcher_foreground.png", width: 432, height: 432 },
        { name: "ic_launcher_round.png", width: 192, height: 192 },
        { name: "ic_launcher.png", width: 192, height: 192 },
      ],
    },
  ];


  for (const map of mipmap) {
    const { items, density } = map
    for(const item of items) {
      sharp(icon)
      .resize(item.width, item.height)
      .png()
      .toFile(`./src-tauri/gen/android/app/src/main/res/mipmap-${density}/${item.name}`);
    }
  }
}

generateTauriIcons()
generateTauriAndroidIcons()



