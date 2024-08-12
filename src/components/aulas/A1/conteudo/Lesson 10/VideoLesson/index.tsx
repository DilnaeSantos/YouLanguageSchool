//import react from 'react';
import { Stylebody } from "./styles";

const VideoLesson: React.FC = () => {
  const embedUrl = 'https://drive.google.com/file/d/1T496XyMyfg4srtJRmo2ZramynKvfRzCq/preview';

  return (
    <>
      <Stylebody>
        <iframe
          src={embedUrl}
          width="640"
          height="480"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
      </Stylebody>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default VideoLesson;