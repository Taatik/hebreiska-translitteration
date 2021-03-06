import { Text } from "../src/index";

describe.each`
  description       | hebrew       | transliteration
  ${"vocal shewa"}  | ${"סְלִק"}   | ${"selik"}
  ${"silent shewa"} | ${"אַגְמֹן"} | ${"agmon"}
  ${"final shewa"}  | ${"לֵךְ"}    | ${"lech"}
  ${"sqnmlwy form"} | ${"וַיְהִי"} | ${"vajehi"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
