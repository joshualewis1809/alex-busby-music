import { SpotifyOutlined } from "@ant-design/icons";
import { Button, Flex, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { ReactNode, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./AlexBusbyMusic.module.scss";
import Home from "./Home/Home";

const AlexBusbyMusic: React.FC = () => {
  return (
    <Layout className={styles.alexBusbyMusic}>
      <Header className={styles.header}>
        <Flex vertical={false} justify="space-between" align="center">
          <h1>Alex Busby</h1>
          <Button
            icon={<SpotifyOutlined />}
            htmlType="button"
            type="primary"
            onClick={() =>
              window.open(
                "https://open.spotify.com/artist/7BlrUMb6gLq0Ha27eUnFyH?si=Ohxztde5TIylKuhx6AuhKw",
                "_blank"
              )
            }
          />
        </Flex>
      </Header>
      <Content className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </Content>
      <Footer className={styles.footer}>Copyright © 2025</Footer>
    </Layout>
  );
};

export default AlexBusbyMusic;
