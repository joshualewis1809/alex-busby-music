import { Card, Image, Layout } from "antd";
import SongProps from "./interfaces/SongProps";
import Meta from "antd/es/card/Meta";
import { CloudOutlined, SpotifyOutlined } from "@ant-design/icons";
import styles from "./Song.module.scss";

const Song: React.FC<SongProps> = (props: SongProps) => {
  return (
    <Card
      className={styles.song}
      hoverable
      bordered
      style={{ width: 400 }}
      cover={
          <Image
            className={styles.artworkImage}
            alt={`${props.name} artwork`}
            src={props.artwork}
          />
      }
      actions={[
        ...(props.spotifyIFrame != null
          ? [
              <SpotifyOutlined
                className={styles.spotify}
                onClick={() =>
                  props.setFloatingPlayerIFrame(props.spotifyIFrame)
                }
              />,
            ]
          : []),
        ...(props.soundCloudIFrame != null
          ? [
              <CloudOutlined
                className={styles.soundCloud}
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
