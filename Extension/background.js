
// Create a context menu item
chrome.contextMenus.remove("fetchSelectedText", function () {
chrome.contextMenus.create({
    id: "fetchSelectedText",
    title: "Fetch Selected Text",
    contexts: ["selection"],
  });
})
  
  // Add a click event listener to the context menu item
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId === "fetchSelectedText") {
      // Send a message to the content script to retrieve the selected text
      chrome.scripting.executeScript(
        {
          target: { tabId: tab.id },
          function: getSelectedText,
        },
        function (results) {
          // Handle the result returned from the content script
          const selectedText = results[0].result;
          const url = tab.url;
          const data = {"url" : url, "text" : selectedText};
          console.log(data);
          sendDataToServer(url, selectedText);
        }
      );
    }
  });
  
  // Function to be executed in the context of the webpage
  function getSelectedText() {
    return window.getSelection().toString();
  }
  
  function sendDataToServer(url, selectedText) {
    // Define the endpoint URL of your backend server
    const endpointURL = 'http://localhost:3000/text';
  
    // Create the request payload
    const data = {
      url: url,
      selectedText: selectedText
    };
  
    // Send the POST request to the backend server
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
  
  
  
  
  
  
  