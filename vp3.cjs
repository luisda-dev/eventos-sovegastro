const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 2000, height: 1125 } });
  await p.goto('https://eventos-sovegastro.vercel.app/', { waitUntil: 'domcontentloaded' });
  await p.waitForTimeout(2000);
  await p.locator('.home-menu-item', { hasText: 'Sala de Conferencias' }).click();
  await p.waitForTimeout(3000);
  await p.screenshot({ path: '/tmp/prod-sala-banner2.png' });
  await b.close();
})();
