import { Text } from "../src/index";

describe.each`
  description                                  | hebrew                    | transliteration
  ${"consonantal yod"}                         | ${"יָם"}                  | ${"jam"}
  ${"const yod with hiriq as vowel"}           | ${"יַיִן"}                | ${"jajin"}
  ${"hiriq yod: medial"}                       | ${"סִיר"}                 | ${"sir"}
  ${"hiriq yod: final"}                        | ${"אֲנִי"}                | ${"ani"}
  ${"hiriq yod: final with maqqef"}            | ${"וַֽיְהִי־כֵֽן"}        | ${"vajehi-chen"}
  ${"hiriq followed by const yod (fake word)"} | ${"סִיֵּם"}               | ${"sijem"}
  ${"medial tsere-yod"}                        | ${"אֵין"}                 | ${"en"}
  ${"final tsere-yod"}                         | ${"רִגְעֵי"}              | ${"rigej"}
  ${"final tsere-yod with maqqef"}             | ${"בְמַעְגְּלֵי־צֶ֝֗דֶק"} | ${"vemagelej-tsedek"}
`("$description", ({ description, hebrew, transliteration }) => {
  const heb = new Text(hebrew);
  const transliteratedHeb = heb.transliterate();
  test(`${description} to equal: ${transliteration}`, () => {
    expect(transliteratedHeb).toEqual(transliteration);
  });
});
