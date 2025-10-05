// settings.js (IAA Journal)
var selectedIssue = (window.__IAA_JOURNAL__ && window.__IAA_JOURNAL__.selectIssue())
  ? window.__IAA_JOURNAL__.selectIssue()
  : null;

if (!selectedIssue) {
  selectedIssue = {
    slug: "placeholder",
    title: "IAA Journal",
    pdf: "issues/placeholder.pdf",
    date: "2025-01-01",
    outline: [{ title: "Cover", dest: 1 }]
  };
}

var option_PDF1 = {
  source: selectedIssue.pdf,

  hard: "hard",
  backgroundImage: "assets/background.jpg",
  backgroundColor: "#fff",

  soundEnable: true,
  enableDownload: true,
  centerBook: true,
  singlePageMode: false,
  coverPage: true,
  rightToLeft: false,
  scrollWheel: true,

  text: {
    toggleSound: "Sound On/Off",
    toggleOutline: "Table of Contents",
    previousPage: "Previous Page",
    nextPage: "Next Page",
    toggleFullscreen: "Fullscreen",
    zoomIn: "Zoom In",
    zoomOut: "Zoom Out",
    downloadPDFFile: "Download PDF"
  },

  allControls: "outline,thumbnail,startPage,altPrev,pageNumber,altNext,endPage,zoomIn,zoomOut,fullscreen,download",
};

option_PDF1.outline = selectedIssue.outline || [];

document.addEventListener("DOMContentLoaded", function () {
  try {
    document.title = selectedIssue.title + " | IAA Journal";
    var h1 = document.querySelector("#iaa-journal-seo h1");
    if (h1) h1.textContent = selectedIssue.title;
  } catch (e) {}
});
