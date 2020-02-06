import { Haiku } from "./../src/haiku"


describe ('Haiku', () => {
  test('should check that a haiku is 3 lines', () => {
    let haikuPoem = new Haiku("a","b","c");
    expect(haikuPoem.lineOne).toEqual("a");
  });
});
