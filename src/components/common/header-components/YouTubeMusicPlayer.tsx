import { useState, useEffect } from 'react';
import { PlayIcon, PauseIcon, ForwardIcon, BackwardIcon, PlusIcon } from '@heroicons/react/24/solid';
import { cn } from '@/lib/utils';

interface YouTubeMusicPlayerProps {
    showPlayButton?: boolean;
    showPrevNextButtons?: boolean;
    showAddButton?: boolean;
    showVolumeControl?: boolean;
    showNowPlaying?: boolean;
    showYouTubeAttribution?: boolean;
    defaultVideos?: string[];
}

const defaultMusicVideos = [
    'jfKfPfyJRdk',  // Lofi Girl
    '5qap5aO4i9A',  // Lofi Hip Hop
    'DWcJFNfaw9c',  // Chill Music
    '4xDzrJKXOOY',  // Relaxing Jazz
    '7NOSDKb0HlU',  // Classical
    'wJzVg0P2mQ4',  // Piano Relax
    '1ZYbU82GVz4',  // Nature Sounds
    'yIQd2Ya0Ziw',  // Meditation Music
    'rUxyKA_-grg',  // Coffee Shop Ambience
    'bP9gMpl1gyQ',  // Rain Sounds
    'qH3fET4fq3Q',  // Zen Garden
    'Fm5s7ZLN6K8'   // Ocean Waves
];

export const YouTubeMusicPlayer = ({
    showPlayButton = true,
    showPrevNextButtons = true,
    showAddButton = true,
    showVolumeControl = true,
    showNowPlaying = true,
    showYouTubeAttribution = true,
    defaultVideos = defaultMusicVideos
}: YouTubeMusicPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(null);
    const [player, setPlayer] = useState<any>(null);
    const [videos, setVideos] = useState<string[]>(defaultVideos);
    const [showAddModal, setShowAddModal] = useState(false);
    const [customVideoId, setCustomVideoId] = useState('');
    const [volume, setVolume] = useState(50);

    // Load YouTube IFrame API
    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        // @ts-ignore
        window.onYouTubeIframeAPIReady = () => {
            // @ts-ignore
            const ytPlayer = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                events: {
                    'onReady': onPlayerReady,
                }
            });
            setPlayer(ytPlayer);
        };

        return () => {
            if (player) {
                player.destroy();
            }
        };
    }, []);

    const onPlayerReady = (event: any) => {
        event.target.setVolume(volume);
    };

    const playTrack = (index: number) => {
        const videoId = videos[index];
        setCurrentVideoIndex(index);

        if (player) {
            player.loadVideoById(videoId);
            player.playVideo();
            setIsPlaying(true);
        }
    };

    const playRandomTrack = () => {
        if (isPlaying && currentVideoIndex !== null) {
            player.pauseVideo();
            setIsPlaying(false);
        } else {
            const randomIndex = Math.floor(Math.random() * videos.length);
            playTrack(randomIndex);
        }
    };

    const playNextTrack = () => {
        if (currentVideoIndex === null || videos.length === 0) return;
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        playTrack(nextIndex);
    };

    const playPreviousTrack = () => {
        if (currentVideoIndex === null || videos.length === 0) return;
        const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        playTrack(prevIndex);
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value);
        setVolume(newVolume);
        if (player) {
            player.setVolume(newVolume);
        }
    };

    const addCustomVideo = () => {
        if (!customVideoId.trim()) return;

        let videoId = customVideoId;
        const urlMatch = customVideoId.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
        if (urlMatch && urlMatch[1]) {
            videoId = urlMatch[1];
        }

        if (!videos.includes(videoId)) {
            const newVideos = [...videos, videoId];
            setVideos(newVideos);
            setCustomVideoId('');
            setShowAddModal(false);
            playTrack(newVideos.length - 1);
        }
    };

    const getVideoTitle = (videoId: string) => {
        const knownTitles: Record<string, string> = {
            'jfKfPfyJRdk': 'Lofi Girl',
            '5qap5aO4i9A': 'Lofi Hip Hop',
            'DWcJFNfaw9c': 'Chill Music',
            '4xDzrJKXOOY': 'Relaxing Jazz',
            '7NOSDKb0HlU': 'Classical',
            'wJzVg0P2mQ4': 'Piano Relax',
            '1ZYbU82GVz4': 'Nature Sounds',
            'yIQd2Ya0Ziw': 'Meditation Music',
            'rUxyKA_-grg': 'Coffee Shop',
            'bP9gMpl1gyQ': 'Rain Sounds',
            'qH3fET4fq3Q': 'Zen Garden',
            'Fm5s7ZLN6K8': 'Ocean Waves'
        };
        return knownTitles[videoId] || `Custom Track ${videos.indexOf(videoId) - defaultVideos.length + 1}`;
    };

    return (
        <div className="flex flex-col gap-2">
            {/* YouTube player container (hidden) */}
            <div id="youtube-player" className="hidden"></div>

            {/* Controls row */}
            <div className="flex items-center gap-2">
                {/* Previous button */}
                {showPrevNextButtons && (
                    <button
                        onClick={playPreviousTrack}
                        className={cn(
                            "flex items-center justify-center h-6 w-6 rounded-full",
                            "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
                            "text-gray-800 dark:text-gray-200"
                        )}
                        aria-label="Previous track"
                        disabled={videos.length === 0}
                    >
                        <BackwardIcon className="h-3 w-3" />
                    </button>
                )}

                {/* Play/Pause button with rotation */}
                {showPlayButton && (
                    <button
                        onClick={playRandomTrack}
                        className={cn(
                            "flex items-center justify-center h-8 w-8 rounded-full transition-all",
                            isPlaying
                                ? "bg-red-500 hover:bg-red-600 text-white animate-spin"
                                : "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                        )}
                        aria-label={isPlaying ? "Pause music" : "Play relaxing music"}
                        disabled={videos.length === 0}
                        style={{ animationDuration: '2000ms' }}
                    >
                        {isPlaying ? (
                            <PauseIcon className="h-4 w-4" />
                        ) : (
                            <PlayIcon className="h-4 w-4 pl-0.5" />
                        )}
                    </button>
                )}

                {/* Next button */}
                {showPrevNextButtons && (
                    <button
                        onClick={playNextTrack}
                        className={cn(
                            "flex items-center justify-center h-6 w-6 rounded-full",
                            "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
                            "text-gray-800 dark:text-gray-200"
                        )}
                        aria-label="Next track"
                        disabled={videos.length === 0}
                    >
                        <ForwardIcon className="h-3 w-3" />
                    </button>
                )}

                {/* Add track button */}
                {showAddButton && (
                    <button
                        onClick={() => setShowAddModal(true)}
                        className={cn(
                            "flex items-center justify-center h-6 w-6 rounded-full",
                            "bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600",
                            "text-gray-800 dark:text-gray-200"
                        )}
                        aria-label="Add custom track"
                    >
                        <PlusIcon className="h-3 w-3" />
                    </button>
                )}

                {/* Volume control */}
                {showVolumeControl && (
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-16 accent-red-500 dark:accent-red-400"
                        aria-label="Volume control"
                    />
                )}
            </div>

            {/* Current track info */}
            {showNowPlaying && isPlaying && currentVideoIndex !== null && (
                <div className="text-xs text-gray-600 dark:text-gray-300">
                    Now playing: {getVideoTitle(videos[currentVideoIndex])}
                </div>
            )}

            {/* YouTube attribution */}
            {showYouTubeAttribution && (
                <div className="text-[6px] text-gray-400">Powered by YouTube</div>
            )}

            {/* Add custom video modal */}
            {showAddModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-sm w-full">
                        <h3 className="font-medium mb-2">Add YouTube Video</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                            Paste YouTube URL or video ID (e.g. https://youtu.be/jfKfPfyJRdk or just jfKfPfyJRdk)
                        </p>
                        <input
                            type="text"
                            value={customVideoId}
                            onChange={(e) => setCustomVideoId(e.target.value)}
                            placeholder="YouTube URL or video ID"
                            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                        />
                        <div className="flex justify-end gap-2 mt-4">
                            <button
                                onClick={() => setShowAddModal(false)}
                                className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={addCustomVideo}
                                className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded"
                            >
                                Add Video
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};