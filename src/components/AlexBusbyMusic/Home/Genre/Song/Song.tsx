import { Card } from "antd";
import SongProps from "./interfaces/SongProps";
import Meta from "antd/es/card/Meta";
import { CloudOutlined, SpotifyOutlined } from "@ant-design/icons";

const Song: React.FC<SongProps> = (props: SongProps) => {
  return (
    <Card
      bordered
      style={{ width: 400 }}
      cover={<img alt={`${props.name} artwork`} src={props.artwork} />}
      actions={[
        ...(props.spotifyIFrame != null
          ? [
              <SpotifyOutlined
                onClick={() =>
                  props.setFloatingPlayerIFrame(props.spotifyIFrame)
                }
              />,
            ]
          : []),
        ...(props.soundCloudIFrame != null
          ? [
              <CloudOutlined
                onClick={() =>
                  props.setFloatingPlayerIFrame(props.soundCloudIFrame)
                }
              />,
            ]
          : []),
      ]}
    >
      <Meta title={props.name} description={props.year} />
    </Card>
  );
};

export default Song;
