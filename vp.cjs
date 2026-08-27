const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2000, height: 1125 } });
  await p.goto('https://eventos-sovegastro.vercel.app/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(400);
  await p.locator('.home-menu-item', { hasText: 'Sala de Conferencias' }).click();
  await p.waitForTimeout(500);
  await p.screenshot({ path: '/tmp/prod-sala-banner.png' });
  // verify all 16 banners resolve 200
  const results = [];
  for (let i = 1; i <= 16; i++) {
    const res = await p.request.get(`https://eventos-sovegastro.vercel.app/assets/banners/${i}.jpg`);
    results.push(`${i}.jpg: ${res.status()}`);
  }
  console.log(results.join('\n'));
  await b.close();
})();
