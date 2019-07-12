import React from "react";

import { WebView } from "react-native-webview";

const App = () => {
  return (
    <WebView
      originWhitelist={["*"]}
      source={{ uri: "http://192.168.0.105:3000" }}
      onMessage={event => {
        alert(event.nativeEvent.data);
      }}
    />
  );
};

export default App;
