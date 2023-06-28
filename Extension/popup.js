let sendUrl = document.getElementById('getUrl');

sendUrl.onclick = async () => {
    let tabs = await chrome.tabs.query({active: true, currentWindow: true});
    let url = tabs[0].url;
    let message = `URL: ${url} \nfetched sucessfully`;
    alert(message);
    sendDataToServer(url);
};

function sendDataToServer(url) {
    // Define the endpoint URL of your backend server
    const endpointURL = 'http://localhost:3000/url';
  
    // Create the request payload
    const data = {
      url: url
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