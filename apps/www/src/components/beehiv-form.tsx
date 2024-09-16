import React from "react";

interface BeehiivEmbedProps {
  src: string;
  height?: number;
}

const BeehiivEmbed: React.FC<BeehiivEmbedProps> = ({ src, height = 52 }) => {
  return (
    <iframe
      src={src}
      data-test-id="beehiiv-embed"
      width="380"
      height={height}
      frameBorder="0"
      scrolling="no"
      style={{
        margin: 0,
      }}
    />
  );
};

export default BeehiivEmbed;