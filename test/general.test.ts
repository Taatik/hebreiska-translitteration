import { Text } from "../src/index";

describe.each`
  description                            | hebrew                         | transliteration
  ${"no special features"}               | ${"לֶ֬חֶם"}                    | ${"lechem"}
  ${"gemination"}                        | ${"רַנֵּן"}                    | ${"ranen"}
  ${"furtive patach, chet"}              | ${"מָשִׁיחַ"}                  | ${"mashiach"}
  ${"furtive patach, ayin"}              | ${"שָׁמֵ֑עַ"}                  | ${"shamea"}
  ${"furtive patach, he"}                | ${"גָבֹ֗הַּ"}                  | ${"gavoah"}
  ${"final chet w/ patach, NOT furtive"} | ${"מִתַּ֣חַת"}                 | ${"mitachat"}
  ${"final qamets-he"}                   | ${"מַלְכָּה"}                  | ${"malka"}
  ${"divine name"}                       | ${"יְהוָ֣ה"}                   | ${"Adonaj"}
  ${"3ms suffix"}                        | ${"תֹּורֹתָֽיו"}               | ${"torotav"}
  ${"multiple words and passeq"}         | ${"כְּשֶׁ֣בֶת ׀ הַמֶּ֣לֶךְ"}   | ${"keshevet hamelech"}
  ${"mixed with latin chars"}            | ${"אֲבֹותֵינוּ (לְעֹולָם)"}    | ${"avotenu (leolam)"}
  ${"qamets qatan"}                      | ${"כָּל הָעוֹלָם כָּל־הָעֵ֛ץ"} | ${"kol haolam kol-haets"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
