import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import Genre from "./Genre/Genre";
import Song from "./Genre/Song/Song";
import HomeProps from "./interfaces/HomeProps";

const Home: React.FC<HomeProps> = (props: HomeProps) => {

  return (
    <Flex vertical gap={50}>
      <Genre name="Game Soundtracks">
        <Song
          name="Elder Legazy"
          year={2026}
          externalLink="https://store.steampowered.com/app/3122990/Elder_Legacy_Survival/"
          description="Theme song composed for open-world fantasy survival game, Elder Legacy. Inspiration taken from cinematic and orchestral epic fantasy themes with a nod to Eastern European traditional sounds."
          artworkFileName="elder-legacy.jpg"
          localFileName="elder-legacy-theme.wav"
        />
        <Song
          name="Lordbound"
          year={2026}
          externalLink="https://www.lordbound.com/"
          description="A long-term collaboration with highly-anticipated upcoming Elder Scrolls V: Skyrim fan-made expansion. The music was composed to capture the essence of the iconic Elder Scrolls scores, whilst giving a slightly dark and gritty new aesthetic to the game."
          artworkFileName="lordbound.jpg"
          localFileName="lordbound-cities.wav"
        />
      </Genre>
      <Genre name="Film Soundtracks">
        <Song
          name="Moving Past"
          year={2026}
          description="Conceptual piece of music composed for an upcoming short film, Moving Past. The aesthetic of the upcoming film was to convey an emotional yet uneasy relationship between a mother and daughter, capturing emotions such as ambiguity, familiarity and discomfort."
          artworkFileName="moving-past.png"
          localFileName="moving-past.wav"
        />
        <Song
          name="Xander Budnick"
          year={2026}
          artworkFileName="xander-budnick.jpg"
          externalLink="https://www.youtube.com/watch?v=YfFWDO-VoWQ/"
          description="In collaboration with renowned outdoors YouTuber/filmmaker Xander Budnick, this music was composed to complement the immersive experience of his Nepal trekking film. It blends a tranquil ambient soundscape style with a more grandiose orchestral and cinematic movement, capturing the relaxing but awe-inspiring aesthetic of Xander's videos."
          localFileName="xander-theme-1.wav"
        />
      </Genre>
      <Genre name="Original Music">
        <Song
          name="Over Seas"
          year={2026}
          externalLink="https://open.spotify.com/track/4O5i3slhmcpKr0igH2OzUK?si=c974e7aef04c46cb"
          artworkFileName="over-seas.jpg"
        />
        <Song
          name="Moonlit Sakura"
          year={2026}
          artworkFileName="moonlit-sakura.jpg"
          externalLink="https://open.spotify.com/track/6LEO4aMdecFxNoRRs6BsYg?si=44d0e53fe0664c44"
        />
      </Genre>
    </Flex>
  );
};

export default Home;
