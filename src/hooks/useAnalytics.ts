import { useCallback } from 'react';
import { event as gaEvent } from '../utils/analytics';
import { AnalyticsEvent } from '../types/analytics';

const createEvent = (action: string, category: string, label: string, value?: number): AnalyticsEvent => ({
  action,
  category,
  label,
  value,
});

export const useAnalytics = () => {
  const trackVowelToggle = useCallback((vowel: string) => {
    gaEvent(createEvent('toggle_vowel', 'Settings', vowel));
  }, []);

  const trackLetterToggle = useCallback((letter: string) => {
    gaEvent(createEvent('toggle_letter', 'Settings', letter));
  }, []);

  const trackPracticeStart = useCallback((vowelsCount: number, excludedCount: number) => {
    gaEvent(createEvent(
      'start_practice',
      'Practice',
      `Vowels: ${vowelsCount}, Excluded: ${excludedCount}`,
      vowelsCount
    ));
  }, []);

  const trackNextCard = useCallback((card: string) => {
    gaEvent(createEvent('next_card', 'Practice', card));
  }, []);

  const trackPracticeEnd = useCallback(() => {
    gaEvent(createEvent('end_practice', 'Practice', 'Back to settings'));
  }, []);

  const trackAudioPlay = useCallback((letter: string) => {
    gaEvent(createEvent('play_audio', 'Audio', letter));
  }, []);

  return {
    trackVowelToggle,
    trackLetterToggle,
    trackPracticeStart,
    trackNextCard,
    trackPracticeEnd,
    trackAudioPlay,
  };
};