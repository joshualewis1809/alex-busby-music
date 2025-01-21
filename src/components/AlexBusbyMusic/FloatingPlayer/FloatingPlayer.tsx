import { Image, Layout, Menu, Spin, Typography } from "antd";
import { useEffect, useState } from "react";
import FloatingPlayerProps from "./interfaces/FloatingPlayerProps";

const FloatingPlayer: React.FC<FloatingPlayerProps> = (
  props: FloatingPlayerProps
) => {
  //   useEffect(() => {
  //     return () => {};
  //   }, [props.children]);

  return (
    props.children !== null && (
      <Layout
        style={{
          bottom: "10px",
          right: "10px",
          borderRadius: "20px",
          padding: "10px",
          position: "fixed",
        }}
      >
        {props.children}
      </Layout>
    )
  );
};

export default FloatingPlayer;
