chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "dialWithTeams",
    "title": "Dial with Teams",
    "contexts": ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "dialWithTeams" && info.selectionText) {
    // Remove any white spaces or encoded spaces (%20)
	const cleanedNumber = info.selectionText.replace(/%20|\s|\./g, "");
    const telLink = "tel:" + cleanedNumber;
    chrome.tabs.create({ url: telLink });
  }
});
