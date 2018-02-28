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
    var div = '.div-description-app';
    const content = await page.$eval(div, e => e.textContent);
    expect(content).toMatch(/ENTIRE HOUSE/);
  });
});
