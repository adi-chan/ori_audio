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

  const audioItems = [...document.querySelectorAll('.ytp-menuitem')]; // Set audio to english
  const english = audioItems.find(i =>
    i.innerText.toLowerCase().includes('english')
  );
  if (!english) return;

  english.click();
  console.log('Switched audio to English');

  setTimeout(() => {                                                  // Close settings menu 
    document.querySelector('.ytp-settings-button')?.click();
  }, 200);
}


setTimeout(forceEnglishAudio, 2000); // This is for reload


let lastUrl = location.href; // Added this for new videos, this function will track the link so when link changes it recalls the function
setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(forceEnglishAudio, 1500);
  }
}, 1000);
