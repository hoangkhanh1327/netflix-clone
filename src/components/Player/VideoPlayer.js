import { useContext } from 'react';
import reactDom from 'react-dom';
import PlayerContext from '../../contexts/PlayerContext';

const VideoPlayer = ({ src }) => {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return showPlayer
        ? reactDom.createPortal(
              <div className="flex flex-col justify-center fixed top-0 left-0 w-full h-full bg-overlay mx-5">
                  <div className="relative w-full max-w-4xl m-auto">
                      <video controls className="w-full h-full">
                          <source src={src} type="video/mp4" />
                      </video>
                      <button
                          className="absolute text-white top-4 right-4 w-6 h-6 opacity-30 bg-transparent border-none cursor-pointer hover:opacity-100"
                          onClick={() => setShowPlayer(!showPlayer)}
                      >X</button>
                  </div>
              </div>,
              document.body
          )
        : null;
};

export default VideoPlayer;
