# CypressProject
Run tests using cypress

# What is Cypress?
It is a next gen Automation tool
It automatically waits for commands before moving on, no more asynchronization errors
It checks for the state and waits for the state to change
In other frameworks, you have to use explicit or implicit or frequent waits
It has a 4 secs time out which you can override
It checks the dome and if it sees any loading activities, it waits
Used in intergration testing, it can mock the response you are getting from ur API
Cypress can work on JQuery objects and call its methods

# How Cypress works
Selenium wraps ur code in a json file and sends it to the browser driver using HTTP request, the driver interpraits
the selenium command and sends this to the recommended browser, the browser then sends back the response to the driver that sends it back as an HTTP response.

Cypress takes snapshots as your tests run. We can hover over each commands in the Command Log to see exactly what happened at each step. ypress also bundles with jQuery and inherits many of jQuery methods for UI components Identification

With Cpress, there is no proxy, the browser listens to ur code directly thus you can mordify the dom. It is in ur browser
thus interacts directly with the browser. Thats why it is fast, thus you can do
Unit testing
Intergration testing
End to End testing
It supports
Chrome
Electron (Light weight browser)
Firefox
IE

# Installing Cypress
Download node
Install or upgrade 
npm install -g npm-windows-upgrade
npm-windows-upgrade (Run as administrator)

npm -i init to create our package.json
npm install cypress --save-dev (Installs and saves in the package.json)
.\node_modules\.bin\cypress.cmd install --force

# Running Cypress
Cypress is stored in  node_modules/.bin/cypress and can be run from there
node_modules\.bin\cypress open
This is because all the executables are stored inside the bin directory
After running cypress for the first time, it creates a cypress project

# Testing
Cypress automates but we need to wrap our tests in a testing framework
Cypress recommends mocha as our testing framework
describe is a test suit and can have numerous tests defined by the it block

