import { PWAAngular4OpenWeatherMapPage } from './app.po';

describe('pwa-angular4-open-weather-map App', () => {
  let page: PWAAngular4OpenWeatherMapPage;

  beforeEach(() => {
    page = new PWAAngular4OpenWeatherMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
