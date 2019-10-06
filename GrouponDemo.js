const puppeteer = require('puppeteer');

const HomePage={
	search:'#ls-search',
	popupPage:'#nothx',
	result1:'div#pull-cards figure:first-child',
	buybutton:'#buy',
	email:'#login-email-input',
	password:' #login-password-input',
	signin:' #signin-button'
}


puppeteer.launch({headless: false}).then(async browser => {

  const page = await browser.newPage();
  await page.goto('https://www.groupon.com/');// Get the "viewport" of the page, as reported by the page.
  await page.setViewport({width: 1920, height: 1080});
  await page.click(HomePage.popupPage);
  await page.waitFor(HomePage.search);
  await page.type(HomePage.search,"Spa Deals"+"\n");
  await page.waitFor(HomePage.result1);
  await page.click(HomePage.result1);
  await page.waitFor(HomePage.buybutton);
  await page.click(HomePage.buybutton);
  await page.waitFor(HomePage.email);
  await page.type(HomePage.email,"jrohit54@gmail.com");
  await page.type(HomePage.password,"Smiles@123");
  await page.click(HomePage.signin);
  await page.screenshot({path: 'example.png'});
  await browser.close();




  });
