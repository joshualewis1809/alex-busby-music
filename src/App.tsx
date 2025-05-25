import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlexBusbyMusic from "./components/AlexBusbyMusic/AlexBusbyMusic";
import { ConfigProvider, notification, theme } from "antd";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff4d00",
            fontFamily: "Excentra Pro Light"
          },
          
          algorithm: [
            theme.darkAlgorithm
          ],
        }}
      >
        <Routes>
          <Route 
          >
            <Route
              path="*"
              element={
                <AlexBusbyMusic
                />
              }
            />
          </Route>
        </Routes>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
