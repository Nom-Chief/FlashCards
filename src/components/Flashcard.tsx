import React from 'react';
import { ArrowLeft } from 'lucide-react';
import AudioButton from './AudioButton';

interface FlashcardProps {
  content: string;
  onNext: () => void;
  onBack: () => void;
}

export default function Flashcard({ content, onNext, onBack }: FlashcardProps) {
  return (
    <div className="max-w-md mx-auto p-6">
      <button
        onClick={onBack}
        className="mb-6 flex items-center text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Vowel Selection
      </button>
      <div className="relative">
        <div 
          className="aspect-square bg-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
          onClick={onNext}
        >
          <span className="text-8xl font-hebrew">{content}</span>
        </div>
        <div className="absolute top-4 right-4">
          <AudioButton content={content} />
        </div>
      </div>
      <p className="text-center mt-4 text-gray-600">Click the card for the next letter</p>
    </div>
  );
}