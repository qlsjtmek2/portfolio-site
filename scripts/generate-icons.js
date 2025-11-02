const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateIcons() {
  const sourceImage = path.join(__dirname, '../public/images/profile.jpg');
  const appDir = path.join(__dirname, '../app');

  console.log('📸 Source image:', sourceImage);
  console.log('📁 Output directory:', appDir);

  // 이미지가 존재하는지 확인
  if (!fs.existsSync(sourceImage)) {
    console.error('❌ Source image not found:', sourceImage);
    process.exit(1);
  }

  try {
    // 1. icon.png (192x192) - 모던 브라우저용
    console.log('🎨 Generating icon.png (192x192)...');
    await sharp(sourceImage)
      .resize(192, 192, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(appDir, 'icon.png'));
    console.log('✅ icon.png created');

    // 2. apple-icon.png (180x180) - iOS/Safari용
    console.log('🍎 Generating apple-icon.png (180x180)...');
    await sharp(sourceImage)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(appDir, 'apple-icon.png'));
    console.log('✅ apple-icon.png created');

    // 3. favicon.ico는 icon.png를 32x32로 리사이즈
    // (실제 .ico 파일은 온라인 변환기 사용 권장, 여기서는 png로 생성)
    console.log('🌐 Generating favicon.ico (32x32)...');
    const faviconBuffer = await sharp(sourceImage)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toBuffer();

    // ICO 변환은 복잡하므로 PNG를 ICO로 이름만 변경
    // 브라우저는 PNG도 favicon으로 인식함
    fs.writeFileSync(path.join(appDir, 'favicon.ico'), faviconBuffer);
    console.log('✅ favicon.ico created (as PNG)');

    // 4. opengraph-image.png (1200x630) - 소셜 미디어 미리보기
    console.log('📱 Generating opengraph-image.png (1200x630)...');

    // 배경 생성 (그라데이션 효과)
    const ogBackground = Buffer.from(
      `<svg width="1200" height="630">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="630" fill="url(#grad)"/>
      </svg>`
    );

    // 프로필 이미지를 원형으로 크롭하고 중앙에 배치
    const profileCircle = await sharp(sourceImage)
      .resize(300, 300, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toBuffer();

    // 배경과 프로필 이미지 합성
    await sharp(ogBackground)
      .composite([
        {
          input: profileCircle,
          top: 165, // (630 - 300) / 2
          left: 450 // (1200 - 300) / 2
        }
      ])
      .png()
      .toFile(path.join(appDir, 'opengraph-image.png'));
    console.log('✅ opengraph-image.png created');

    // 5. twitter-image.png (1200x600) - Twitter 카드용
    console.log('🐦 Generating twitter-image.png (1200x600)...');

    const twitterBackground = Buffer.from(
      `<svg width="1200" height="600">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="1200" height="600" fill="url(#grad)"/>
      </svg>`
    );

    const twitterProfileCircle = await sharp(sourceImage)
      .resize(280, 280, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toBuffer();

    await sharp(twitterBackground)
      .composite([
        {
          input: twitterProfileCircle,
          top: 160, // (600 - 280) / 2
          left: 460 // (1200 - 280) / 2
        }
      ])
      .png()
      .toFile(path.join(appDir, 'twitter-image.png'));
    console.log('✅ twitter-image.png created');

    console.log('\n🎉 All icons generated successfully!');
    console.log('\n📋 Generated files:');
    console.log('  • app/icon.png (192x192) - Modern browsers');
    console.log('  • app/apple-icon.png (180x180) - iOS/Safari');
    console.log('  • app/favicon.ico (32x32) - Legacy browsers');
    console.log('  • app/opengraph-image.png (1200x630) - Social media');
    console.log('  • app/twitter-image.png (1200x600) - Twitter cards');
    console.log('\n💡 Next.js will automatically detect these files!');

  } catch (error) {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
