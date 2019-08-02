import format from "date-fns/format";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";

if (typeof self !== "undefined") { init(self); }
else if (typeof global !== "undefined") { init(global); }
else if (typeof window !== "undefined") { init(window); }
else { throw new Error("unsupported execution environment"); }

function init(g) {
  g.dateFns = {
    format,
    distanceInWordsToNow
  };
}
