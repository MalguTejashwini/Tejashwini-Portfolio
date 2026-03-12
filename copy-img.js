const fs = require('fs');

try {
  const source = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\163c3688-cccb-475e-b198-3188d69a7cdc\\media__1773248386803.jpg';
  const destPath = 'c:\\Users\\Admin\\OneDrive\\Desktop\\portfolio\\src\\components\\profile.jpg';
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, destPath);
    console.log('Successfully copied to:', destPath);
  } else {
    console.log('Source file does not exist:', source);
  }
} catch (err) {
  console.error('Error copying file:', err);
}
