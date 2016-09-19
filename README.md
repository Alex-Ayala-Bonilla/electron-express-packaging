# electron-express-packaging

A example project that uses electron, express and has prepared to use native modules.

## Some important dependecies.

### electron-builder

To distribute and package the app. For more info: (electron-builder)[https://github.com/electron-userland/electron-builder]

### electron-rebuild

To rebuild nate Node.js modules, more info : (electron-rebuild)[https://github.com/electron/electron-rebuild]

## Installing and running the app

(This project has been tested on windows)

* Clone the project.
* In app folfer type `npm install`
* test the server without electron typing `app>node src\server.js`
* test the server with electron typing `app>electron .`
* to build and package the project `app> npm run dist`

### npm run dis: Generates two folders:

* win
* win-unpacked
