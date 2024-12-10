import React from 'react';
import { Volume2 } from 'lucide-react';
import { useAudio } from '../hooks/useAudio';

interface AudioButtonProps {
  content: string;
}

export default function AudioButton({ content }: AudioButtonProps) {
  const { playAudio, isPlaying } = useAudio();

  return (
    <button
      onClick={() => playAudio(content)}
      disabled={isPlaying}
      className="p-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50"
      aria-label="Play pronunciation"
    >
      <Volume2 className="w-6 h-6" />
    </button>
  );
}