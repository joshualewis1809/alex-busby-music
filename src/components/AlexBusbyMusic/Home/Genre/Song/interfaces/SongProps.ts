import { IframeHTMLAttributes, ReactElement } from "react";

export default interface SongProps {
    name: string; 
    year: number;
    artwork: string;
    setFloatingPlayerIFrame: Function;
    soundCloudIFrame?: ReactElement | null; 
    spotifyIFrame?: ReactElement | null; 
}