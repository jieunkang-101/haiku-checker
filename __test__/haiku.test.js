import { Haiku } from "./../src/haiku"



describe ('Haiku', () => {
  let haikuPoem;
  let syllabes; 
  
  beforeEach(() => {
    haikuPoem = new Haiku("this is a haiku", "this is also a haiku", "this is a haiku");
    syllabes = haikuPoem.syllables("haiku");
  });

  test('should check that a haiku is 3 lines', () => {
    expect(haikuPoem.lineOne).toEqual("this is a haiku");
  });

  test('should correctly check syllable of a inputted word', () => {
    expect(syllabes).toBe(2);
  });

  test('should check if any one line has the appropriate number of syllables', () => {
    expect(haikuPoem.checkline("this is a haiku")).toEqual(5);
  });
});
