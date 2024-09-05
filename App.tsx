import React from 'react';
import { WebView } from 'react-native-webview';
function App(): React.JSX.Element {
  return <WebView
    source={{ uri: 'https://financesone.worldbank.org/' }}
    allowFileAccess={true}
    allowUniversalAccessFromFileURLs={true}
    javaScriptEnabled={true}
    allowFileAccessFromFileURLs
    onFileDownload={() => {
      console.error("google")
    }} style={{ flex: 1 }} />;
}
export default App;
