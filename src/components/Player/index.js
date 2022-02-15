import { useState } from 'react';
import PlayerContext from '../../contexts/PlayerContext';
import PlayButton from './PlayButton';
import VideoPlayer from './VideoPlayer';

const Player = () => {
    const [showPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <div>
                <PlayButton />
                <VideoPlayer src="/videos/bunny.mp4" />
            </div>
        </PlayerContext.Provider>
    );
};

export default Player;
