import { DownloadOutlined, LinkOutlined } from "@ant-design/icons";
import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import SongProps from "./interfaces/SongProps";
import styles from "./Song.module.scss";

const Song: React.FC<SongProps> = (props: SongProps) => {
  const downloadFile = (data: unknown, fileName: string): void => {
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.setAttribute("style", "display: none");
    console.log((data as string).length);

    const blob = new Blob([data as string], { type: "audio/wav" });
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = `${fileName}`;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <Card
      className={styles.song}
      hoverable
      bordered
      cover={
        <Image
          className={styles.artworkImage}
          alt={`${props.name} artwork`}
          src={require(`../../../../../assets/images/${props.artworkFileName}`)}
        />
      }
      actions={[
        ...(props.localFileName !== undefined
          ? [
              <DownloadOutlined
                onClick={() =>
                  downloadFile(
                    require(`../../../../../assets/audio/${props.localFileName}`),
                    props.localFileName
                  )
                }
              />,
            ]
          : []),
        ...(props.externalLink !== undefined
          ? [
              <LinkOutlined
                onClick={() => window.open(props.externalLink, "_blank")}
              />,
            ]
          : []),
      ]}
    >
      <Meta
        style={{ height: "100%" }}
        title={props.name}
        description={props.description}
      />
      {props.localFileName !== undefined && (
        <audio
          className={styles.audioPlayer}
          controls
          src={require(`../../../../../assets/audio/${props.localFileName}`)}
        />
      )}
    </Card>
  );
};

export default Song;
