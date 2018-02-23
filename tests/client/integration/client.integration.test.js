const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:3001/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});

afterAll(() => {
  browser.close();
});

describe('search function', () => {

  beforeEach(async () =>{
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

  test('initial text is correct', async () => {
    var div = '.div-app';
    const title = await page.$eval(div, e => e.textContent);
    expect(title).toEqual('App goes here');
  });

  // test('can search for cats', async () => {
  //   var selector = 'input.form-control[type=text]';
  //   await page.click(selector);
  //   await page.type(selector, 'cats');
  //   await page.waitFor(2000);
  //   var div = '.video-player-details h3';
  //   const title = await page.$eval(div, e => e.textContent);
  //   expect(title).toEqual('CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation');
  // });

});
