const puppeteer = require('puppeteer');


const loginpage={
	email:'body.fk-modal-visible:nth-child(2) div.mCRfo9:nth-child(7) div._2ISNhP._3AOFWO div._3Njdz7 div._32LSmx div._1XBjg-.row div.Km0IJL.col.col-3-5 div:nth-child(1) form:nth-child(1) div._39M2dM.JB4AMj:nth-child(1) > input._2zrpKA._1dBPDZ',
	password:'body.fk-modal-visible:nth-child(2) div.mCRfo9:nth-child(7) div._2ISNhP._3AOFWO div._3Njdz7 div._32LSmx div._1XBjg-.row div.Km0IJL.col.col-3-5 div:nth-child(1) form:nth-child(1) div._39M2dM.JB4AMj:nth-child(2) > input._2zrpKA._3v41xv._1dBPDZ',
	loginbutton:'body.fk-modal-visible:nth-child(2) div.mCRfo9:nth-child(7) div._2ISNhP._3AOFWO div._3Njdz7 div._32LSmx div._1XBjg-.row div.Km0IJL.col.col-3-5 div:nth-child(1) form:nth-child(1) div._1avdGP:nth-child(3) > button._2AkmmA._1LctnI._7UHT_c'
}


puppeteer.launch({headless: false}).then(async browser => {

  const page = await browser.newPage();
  await page.goto('https://flipkart.com');
  await page.waitFor(loginpage.email);
  await page.type(loginpage.email,"jrohit54@gmail.com");
  await page.type(loginpage.password,"Mnbvcx@123");
  await page.click(loginpage.loginbutton);
  await page.screenshot({path: 'example.png'});
  await browser.close();
});
