chrome.action.onClicked.addListener((tab) => {
  // Check if the URL is jidelna.cz before injecting
  // Use includes() for flexibility (e.g., www.jidelna.cz)
  if (tab.url && tab.url.includes("jidelna.cz")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    }).then(() => {
      console.log("Injected content script into jidelna.cz page.");
    }).catch(err => console.error("Failed to inject script:", err));
  } else {
    console.log("Extension icon clicked, but not on a jidelna.cz page.");
    // Optionally notify the user or disable the icon on non-matching pages
  }
});
