import React from 'react';
import { WebView } from 'react-native-webview';
function App(): React.JSX.Element {
  return <WebView
    source={{ uri: 'https://dataappsfilesuat.worldbank.org/f-one/DS00520/RS01267/IBRD_Statement_of_Loans_Latest_Available_Snapshot.csv' }}
    allowFileAccess={true}
    allowUniversalAccessFromFileURLs={true}
    javaScriptEnabled={true}
    allowFileAccessFromFileURLs
    onFileDownload={() => {
      console.error("google")
    }} style={{ flex: 1 }} />;
}
export default App;
