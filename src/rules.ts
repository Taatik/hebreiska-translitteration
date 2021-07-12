import { Syllable } from "havarotjs/dist/syllable";
import { Cluster } from "havarotjs/dist/cluster";
import { transliterateMap } from "./hebCharTrans";

const changeElementSplit = (input: string, split: RegExp, join: string) =>
  input.split(split).join(join);

const mapText = (text: string) =>
  [...text].map((char) => transliterateMap[char] ?? char).join("");

export const syllableRules = (syl: Syllable): string => {
  let returnTxt: string = "";
  const taamim = /[\u{0590}-\u{05AF},\u{05BD},\u{05BF}]/gu;
  const sylTxt = syl.text.replaceAll(taamim, "");
  const isFinal = syl.isFinal;
  const isClosed = syl.isClosed;

  // if 3ms suffix
  const threeMSSuffix = /\u{05B8}\u{05D9}\u{05D5}/u;
  if (threeMSSuffix.test(sylTxt) && syl.isFinal) {
    return mapText(changeElementSplit(sylTxt, threeMSSuffix, "av"));
  }

  syl.clusters.forEach((cluster) => {
    let clusterTrans = cluster.text;
    clusterTrans = clusterTrans.replace(taamim, "");
    /******************
     * SPIRANTIZATION
     ******************/
    // bet with dagesh > b
    if (/ב\u{05BC}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /ב\u{05BC}/u, "b");
    }

    // gimel with dagesh > g
    if (/ג\u{05BC}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /ג\u{05BC}/u, "g");
    }

    // dalet with dagesh > d
    if (/ד\u{05BC}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /ד\u{05BC}/u, "d");
    }

    // kaph with dagesh > k
    if (/כ\u{05BC}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /כ\u{05BC}/u, "k");
    }

    // final kaph with dagesh > k
    if (/ך\u{05BC}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /ך\u{05BC}/u, "k");
    }

    // peh with dagesh > p
    if (/פ\u{05BC}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /פ\u{05BC}/u, "p");
    }

    if (cluster.isMater) {
      const prevTxt = cluster.prev instanceof Cluster ? cluster.prev.text : "";
      const tsereSegolPatah = /[\u{05B5}-\u{05B7}]/u;
      const yod = /\u{05D9}/u;
      if (
        isFinal &&
        !isClosed &&
        yod.test(clusterTrans) &&
        tsereSegolPatah.test(prevTxt)
      ) {
        clusterTrans = changeElementSplit(clusterTrans, yod, "j");
      } else {
        clusterTrans = /\u{05BE}/u.test(clusterTrans) ? "\u{05BE}" : "";
      }
    }

    if (cluster.isShureq) {
      clusterTrans = "u";
    }

    if (cluster.hasShewa && isClosed) {
      const shewa = /\u{05B0}/u;
      clusterTrans = clusterTrans.replace(shewa, "");
    }

    if (isFinal && !isClosed) {
      const furtiveChet = /\u{05D7}\u{05B7}$/mu;
      const furtiveHe = /\u{05D4}\u{05BC}\u{05B7}$/mu;

      if (furtiveChet.test(clusterTrans)) {
        clusterTrans = changeElementSplit(
          clusterTrans,
          furtiveChet,
          "\u{05B7}\u{05D7}"
        );
      } else if (furtiveHe.test(clusterTrans)) {
        clusterTrans = changeElementSplit(
          clusterTrans,
          furtiveHe,
          "\u{05B7}\u{05D4}"
        );
      }
    }

    // shin > s
    if (/ש\u{05C1}/u.test(clusterTrans)) {
      clusterTrans = changeElementSplit(clusterTrans, /ש\u{05C1}/u, "sh");
    }
    returnTxt += clusterTrans;
  });

  return mapText(returnTxt);
};
