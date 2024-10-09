const fs = require('fs-extra');

// Copy assets from src/assets to build/assets
fs.copySync('src/assets', 'build/assets', err => {
  if (err) {
    console.error('Error copying assets', err);
  } else {
    console.log('Assets copied successfully.');
  }
});
