import { useState, useCallback } from 'react';
import { useAnalytics } from './useAnalytics';
import { getLetterSound } from '../utils/pronunciation';

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { trackAudioPlay } = useAnalytics();

  const playAudio = useCallback(async (content: string) => {
    if (isPlaying) return;

    setIsPlaying(true);
    trackAudioPlay(content);

    try {
      // Get the correct pronunciation (with shva for consonants without vowels)
      const soundToPlay = getLetterSound(content);
      
      const utterance = new SpeechSynthesisUtterance(soundToPlay);
      utterance.lang = 'he-IL';
      utterance.rate = 0.8;

      utterance.onend = () => {
        setIsPlaying(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
    }
  }, [isPlaying, trackAudioPlay]);

  return {
    playAudio,
    isPlaying
  };
};