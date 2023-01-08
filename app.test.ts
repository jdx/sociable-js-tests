import {App} from './app';

test('it works', () => {
  const cli = new App();
  expect(cli.run()).toEqual('Hello World');
})
