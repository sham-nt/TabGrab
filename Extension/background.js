chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "fetchSelectedText",
    title: "Fetch Selected Text",
    contexts: ["selection"],
  });
  
  chrome.contextMenus.create({
    id: "copyImageUrl",
    title: "Copy Image URL",
    contexts: ["image"],
  });
  
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "fetchSelectedText") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getSelectedText,
    }, function (results) {
      const selectedText = results[0].result;
      const url = tab.url;
      const data = { "url": url, "text": selectedText };
      console.log(data);
      sendDataToServer(data);
    });
  } else if (info.menuItemId === "copyImageUrl") {
    const imageUrl = info.srcUrl;
    const url = tab.url;
    const data = { "url": url, "imageUrl": imageUrl };
    console.log(data);
    sendDataToServer(data);
  }
});

function getSelectedText() {
  return window.getSelection().toString();
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log("Image URL copied to clipboard");
    })
    .catch((error) => {
      console.error("Failed to copy image URL to clipboard:", error);
    });
}

function sendDataToServer(data) {
  const endpointURL = 'http://localhost:3000/text';

  fetch(endpointURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => {
      if (response.ok) {
        console.log('Data sent successfully to the server.');
      } else {
        console.error('Failed to send data to the server.');
      }
    })
    .catch(error => {
      console.error('Error occurred while sending data:', error);
    });
}
