import { Text } from "../src/index";

// test for sprirantized consonants and some sibilants

describe.each`
  description                  | hebrew      | transliteration
  ${"spirantized bet"}         | ${"אָב"}    | ${"av"}
  ${"unspirantized bet"}       | ${"בָּם"}   | ${"bam"}
  ${"spirantized kaf"}         | ${"לֵךְ"}   | ${"lech"}
  ${"unspirantized kaf"}       | ${"כָּמָר"} | ${"kamar"}
  ${"spirantized peh"}         | ${"אֶלֶף"}  | ${"elef"}
  ${"unspirantized peh"}       | ${"פֹּה"}   | ${"poh"}
  ${"shin char plur shin dot"} | ${"שֶׁלֶם"}  | ${"shelem"}
  ${"shin char plur sin dot"}  | ${"אָרַשׂ"}  | ${"aras"}
  ${"word initial samech"}     | ${"סַד"}    | ${"sad"}
`("$description", ({ hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${hebrew} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
