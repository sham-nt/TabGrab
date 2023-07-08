# Url and Data fetcher extension
              using Google extension kit and Node.js

Chrome extension which can extract the URL, selected Text and, Selected image URL from the current Tab

---
---

## Installation instruction

* Clone the repo in your local system

1) Extension

* Open Google-Chrome browser and enable developer mode
* Load the extension manually from the cloned repo
* Pin the extension to the search bar

2) Backend

* Open the Backend directory in your local terminal and run commands:

          npm install
          npm run-script run
* Now, the server must be running on the 3000 port of your computer
* The output of the actions will be shown in the above terminal session

---
---

## Usage

1) To extract Url

* Click on the extension
* Now in the popup click on the **send URL** button
   
![Screenshot 2023-07-04 at 8 34 08 PM](https://github.com/sham-nt/Reader_ext/assets/90405823/0ff38b5e-7cc7-4006-8e39-f431c8ad6118)

* The URL of the webpage running in the current tab will be reflected in the backend listener

---

2) To extract Text

* Select the required text on the webpage
* Now, open the context menu (right-click) and click on the **Fetch selected text** option

![Screenshot 2023-07-04 at 8 39 21 PM](https://github.com/sham-nt/Reader_ext/assets/90405823/1400c99b-3326-4705-8853-348e03d7dafe)

* The selected text and the URL of the webpage will be reflected in the backend listener in JSON format

---

3) To extract Text

* Select the required image on the webpage
* Now, open the context menu (right-click) and click on the **Copy image URL** option

![Screenshot 2023-07-04 at 8 43 41 PM](https://github.com/sham-nt/Reader_ext/assets/90405823/6c37247d-ed34-4ea6-98a9-bb441ce6e5b8)

* The selected image's URL and the URL of the webpage will be reflected in the backend listener in JSON format

---
---

## TODO

* Style the popup
* Db Conections
* Make func async

---

**Thank You**



