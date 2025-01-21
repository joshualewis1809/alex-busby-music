import { Image, Layout, Menu, Spin, Typography } from "antd";
import { ReactNode, useEffect, useState } from "react";
import styles from "./AlexBusbyMusic.module.scss";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Title from "antd/es/typography/Title";
import FloatingPlayer from "./FloatingPlayer/FloatingPlayer";

const AlexBusbyMusic: React.FC = () => {
  const [floatingPlayerIFrame, setFloatingPlayerIFrame] =
    useState<ReactNode | null>(null);

  return (
    <Layout style={{ height: "100%" }}>
      <Header
        style={{
          backgroundColor: "#1e1e1e",
          textAlign: "center",
          borderBottom: "1px solid white",
        }}
      >
        <Image
          height={"calc(100% - 10px)"}
          src="http://www.ajsdanceparty.co.uk/imgs/AJs%20Logo%20White.png"
        />
      </Header>
      <Content
        style={{
          height: "100%",
          backgroundColor: "#1e1e1e",
          padding: "20px",
          overflowY: "auto",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home setFloatingPlayerIFrame={setFloatingPlayerIFrame} />}
          />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Content>
      <Footer
        style={{
          backgroundColor: "#1e1e1e",
          textAlign: "center",
        }}
      >
        Copyright © 2025
      </Footer>
      <FloatingPlayer>{floatingPlayerIFrame}</FloatingPlayer>
    </Layout>
  );
};

export default AlexBusbyMusic;
