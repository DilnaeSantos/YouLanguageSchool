//import react from 'react';
import { Stylebody } from "./styles";

const Grammar: React.FC = () => {
  const googleDriveLink = "https://drive.google.com/file/d/1nteXwEPSFPMOmhmOKh3sNlFkA-J48itN/preview";

  return (
      <>
          <Stylebody>
              <iframe 
                  src={googleDriveLink} 
                  width="100%" 
                  height="698vh"
                  frameBorder="0"
                  allowFullScreen
              ></iframe>
          </Stylebody>
      </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default Grammar;