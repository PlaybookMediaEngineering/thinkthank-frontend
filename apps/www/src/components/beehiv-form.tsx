import React from "react";

interface BeehiivEmbedProps {
  src?: string;
  height?: number;
}

const BeehiivEmbed: React.FC<BeehiivEmbedProps> = ({ src = "https://embeds.beehiiv.com/aa7a2a0b-4d44-4b4f-afd5-02af1399c5fd?slim=true", height = 52 }) => {
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