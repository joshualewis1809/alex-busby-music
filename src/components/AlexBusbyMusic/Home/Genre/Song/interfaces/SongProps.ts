import { IframeHTMLAttributes, ReactElement, ReactNode } from "react";

export default interface SongProps {
  name: string;
  year: number;
  artworkFileName: string;
  externalLink?: string;
  localFileName?: any;
  description?: string;
}
