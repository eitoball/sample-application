Feature('WeatherAPI');

Scenario('Index', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, world!');
});
