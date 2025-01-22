import { Image, Layout } from "antd";
import { ReactNode, useState } from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import FloatingPlayer from "./FloatingPlayer/FloatingPlayer";
import styles from "./AlexBusbyMusic.module.scss";

const AlexBusbyMusic: React.FC = () => {
  const [floatingPlayerIFrame, setFloatingPlayerIFrame] =
    useState<ReactNode | null>(null);

  return (
    <Layout className={styles.alexBusbyMusic}>
      <Header className={styles.header}>
        <img src="http://www.ajsdanceparty.co.uk/imgs/AJs%20Logo%20White.png" />
      </Header>
      <Content className={styles.content}>
        <Routes>
          <Route
            path="/"
            element={<Home setFloatingPlayerIFrame={setFloatingPlayerIFrame} />}
          />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Content>
      <Footer className={styles.footer}>Copyright © 2025</Footer>
      <FloatingPlayer>{floatingPlayerIFrame}</FloatingPlayer>
    </Layout>
  );
};

export default AlexBusbyMusic;
