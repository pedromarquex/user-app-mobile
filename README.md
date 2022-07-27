<h1 align="center"> Users app - mobile 📱</h1>

<h2 align="center">
    Visualize and manage your users
</h2>

<h3 align="center">
  Built using React Native and Expo.
</h3>

# Cloning this repository

```
git clone https://github.com/pedromarquex/users-app-mobile.git
```


# ❗️ Requisites

To run this app, you need to have the following dependencies installed:
- [Node](https://nodejs.org/en/)

## 💻 Mobile App

<p>
  In this project we use:
</p>

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/) for types
- [UI Kitten ](https://akveo.github.io/react-native-ui-kitten/) for UI components
- [React Navigation](https://reactnavigation.org/) for navigation
- [Axios](https://axios-http.com/) for HTTP requests
- [date-fns](https://date-fns.org/) for date manipulation

### ⚡️ Start

Make sure you have the server running.
The server code located at `https://github.com/pedromarquex/users-app-server`

If you are using Android Studio emulator, you dont need to change the server url.
But if you are using a real device, you need to change the server url to the one of your computer local IP.
The server url is setting in the `src/services/api.ts` file.

```ts
const api = axios.create({ baseURL: "<SERVER_URL>:3333" });
```

To start application, run:

```
cd users-app-mobile

expo install
npm run start

```
# Screenshot

<h1 align="center">
    <img alt = "The app" src = "./.github/users-app-screenshot.png" width = "300" />
</h1>
