import { Flex } from "antd";
import Song from "./Genre/Song/Song";
import Genre from "./Genre/Genre";
import HomeProps from "./interfaces/HomeProps";

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <Flex vertical gap={60}>
      <Genre name="Films & TV">
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
          soundCloudIFrame={
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1975942035&color=%23ff4d00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          }
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
          spotifyIFrame={
            <iframe
              src="https://open.spotify.com/embed/track/6V9VCm1zOY2lGR80RehJ9i?utm_source=generator&theme=0"
              width="100%"
              height="166"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          }
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
          spotifyIFrame={
            <iframe
              src="https://open.spotify.com/embed/track/6V9VCm1zOY2lGR80RehJ9i?utm_source=generator&theme=0"
              width="100%"
              height="166"
              frameBorder="0"
              allowFullScreen={false}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          }
          soundCloudIFrame={
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1975942035&color=%23ff4d00&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          }
        />
      </Genre>
      <Genre name="Video Games">
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
      </Genre>
      <Genre name="Electronic">
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
        <Song
          name="My Song"
          year={2026}
          artwork="https://placehold.co/400x200"
          setFloatingPlayerIFrame={props.setFloatingPlayerIFrame}
        />
      </Genre>
    </Flex>
  );
};

export default Home;
