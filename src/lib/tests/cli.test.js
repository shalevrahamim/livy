describe('CLI test suite', () => {
  describe('arguments tests', () => {
    test('argument passed not in services list, should resolve in error', () => {
      process.argv[2] = 'test';
      const cli = require('../cli');
    });

    test('no arguments passed should resolve in exception', () => {
      try {
        const cli = require('../cli');
      } catch (e) {
        expect(e.message).toEqual(`Livy accepts service name as an argument.`);
      }
    });
  });
});
