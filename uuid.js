function generateUUID() {
  // Generates a v4 UUID
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const uuidDisplay = document.getElementById('uuidDisplay');
const uuidHistory = document.getElementById('uuidHistory');

generateBtn.addEventListener('click', () => {
  const newUUID = generateUUID();
  uuidDisplay.textContent = newUUID;

  const li = document.createElement('li');
  li.textContent = newUUID;
  uuidHistory.prepend(li);
});

copyBtn.addEventListener('click', () => {
  const uuid = uuidDisplay.textContent;
  if (uuid && uuid !== 'Your UUID will appear here') {
    navigator.clipboard.writeText(uuid).then(() => {
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy to Clipboard', 1500);
    });
  }
});