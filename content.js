async function forceEnglishAudio() {
  const settingsBtn = document.querySelector('.ytp-settings-button');
  if (!settingsBtn) return;

  settingsBtn.click();
  await new Promise(r => setTimeout(r, 300));

  const menuItems = [...document.querySelectorAll('.ytp-menuitem')];
  const audioMenu = menuItems.find(i =>
    i.innerText.toLowerCase().includes('audio')
  );
  if (!audioMenu) return;

  audioMenu.click();
  await new Promise(r => setTimeout(r, 300));

  const audioItems = [...document.querySelectorAll('.ytp-menuitem')];
  const english = audioItems.find(i =>
    i.innerText.toLowerCase().includes('english')
  );
  if (!english) return;

  english.click();
  console.log('Switched audio to English');
}


setTimeout(forceEnglishAudio, 2000);


let lastUrl = location.href;
setInterval(() => {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(forceEnglishAudio, 1500);
  }
}, 1000);
