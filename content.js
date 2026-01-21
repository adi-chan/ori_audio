(async () => {

  document.querySelector('.ytp-settings-button')?.click();
  await new Promise(r => setTimeout(r, 300));

  
  const menuItems = [...document.querySelectorAll('.ytp-menuitem')];
  const audioMenu = menuItems.find(i =>
    i.innerText.toLowerCase().includes('audio')
  );

  if (!audioMenu) {
    console.log('Audio track menu not found');
    return;
  }

  audioMenu.click();
  await new Promise(r => setTimeout(r, 300));

  
  const audioItems = [...document.querySelectorAll('.ytp-menuitem')];
  const english = audioItems.find(i =>
    i.innerText.toLowerCase().includes('english')
  );

  if (!english) {
    console.log('English audio not found');
    return;
  }

  english.click();
  console.log('Switched audio to English');
})();
