import { useContext } from 'react';
import PlayerContext from '../../contexts/PlayerContext';

const PlayButton = () => {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);

    return (
        <button
            className="bg-playBtn border-player-border w-28 h-11 uppercase font-bold text-red-400 text-lg rounded flex items-center justify-center pl-0 hover:scale-110"
            onClick={() => setShowPlayer(!showPlayer)}
        >
            Play
        </button>
    );
};

export default PlayButton;
