import { Text } from "../src/index";

describe.each`
  description                              | hebrew           | transliteration
  ${"consonantal waw"}                     | ${"וָו"}         | ${"vav"}
  ${"waw haser (holem precedes waw)"}      | ${"שָׁלֹום"}      | ${"shalom"}
  ${"waw haser (holem proceeds waw)"}      | ${"שָׁלוֹם"}     | ${"shalom"}
  ${"shureq"}                              | ${"קוּם"}        | ${"kum"}
  ${"initial shureq"}                      | ${"וּבָם"}       | ${"uvam"}
  ${"initial shureq followed by shewa"}    | ${"וּלְזַמֵּ֖ר"} | ${"ulzamer"}
  ${"Consonantal vav with holem as vowel"} | ${"עָוֹן"}       | ${"avon"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
