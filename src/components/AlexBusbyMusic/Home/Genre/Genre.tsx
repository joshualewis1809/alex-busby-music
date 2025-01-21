import Meta from "antd/es/card/Meta";
import { CloudOutlined, SpotifyOutlined } from "@ant-design/icons";
import GenreProps from "./interfaces/GenreProps";
import Title from "antd/es/typography/Title";
import { Flex } from "antd";

const Genre: React.FC<GenreProps> = (props: GenreProps) => {
  return (
      <Flex vertical gap={30}>
        <Title level={2} style={{ margin: 0 }}>
          {props.name}
        </Title>
        <Flex vertical={false} gap={25} wrap >
          {props.children}
        </Flex>
      </Flex>
  );
};

export default Genre;
