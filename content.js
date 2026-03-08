function isShorts() {
  return location.pathname.startsWith('/shorts/');
}

async function forceEnglishAudio() {
  const settingsBtn = document.querySelector('.ytp-settings-button'); // This opens the setting menu
  if (!settingsBtn) return;

  settingsBtn.click();
  await new Promise(r => setTimeout(r, 300)); // Gave extra time incase of bugs or stuff

  const menuItems = [...document.querySelectorAll('.ytp-menuitem')];  // This finds all the options in settings so we can locate audio

  const audioMenu = menuItems.find(i =>
    i.innerText.toLowerCase().includes('audio')
  );
  
  if (!audioMenu) {
    document.querySelector('.ytp-settings-button')?.click();
    return; 
  }

  audioMenu.click();
  await new Promise(r => setTimeout(r, 300));

  const audioItems = [...document.querySelectorAll('.ytp-menuitem')]; // Set audio to original
  const english = audioItems.find(i =>
    i.innerText.toLowerCase().includes('original')
  );
  if (!english) return;

  english.click();
  console.log('Switched audio to Original');

  setTimeout(() => {                                                  // Close settings menu 
    document.querySelector('.ytp-settings-button')?.click();
  }, 200);
}

async function forceShortsAudio() {
  const menuBtn = document.querySelector('button[aria-label="More actions"]');
  if (!menuBtn) return;

  menuBtn.click();

  await new Promise(r => setTimeout(r, 500));

  const buttons = [...document.querySelectorAll('yt-list-item-view-model button')];

  const audioBtn = buttons.find(b =>
    b.innerText.toLowerCase().includes("audio")
  );

  if (!audioBtn) {
    console.log("Audio track option not found");
    return;
  }

  audioBtn.click();

  await new Promise(r => setTimeout(r, 500));

  const options = [...document.querySelectorAll('[role="menuitem"]')];

  const original = options.find(o =>
    o.innerText.toLowerCase().includes("original")
  );

  if (!original) {
    console.log("Original audio not found");
    return;
  }

  original.click();

  console.log("Shorts audio switched to Original");
}

function runExtension() {
  if (isShorts()) {
    console.log("Shorts detected");
    setTimeout(forceShortsAudio, 2000);
  } else {
    console.log("Normal video detected");
    setTimeout(forceEnglishAudio, 2000);
  }
}


runExtension();

let lastUrl = location.href; // Added this for new videos, this function will track the link so when link changes it recalls the function
setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    runExtension();
  }
}, 1000);
