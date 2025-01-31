/***********************************************************
Thumbnail Maker v 1.2.1
Made by Wonkook Lee (oneook)
© All Rights Reserved
************************************************************/

"use strict";

(function () {
  const redirectUrl = "https://blog.wonkooklee.com/playground/thumbnail-maker";

  if (typeof window !== "undefined" && typeof window.location !== "undefined") {
    window.location.replace(redirectUrl);
  } else {
    console.error("Window or location object is not available.");
  }
})();
