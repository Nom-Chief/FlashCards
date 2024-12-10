import React from 'react';
import { hebrewVowels } from '../utils/hebrewData';
import LetterSelector from './LetterSelector';

interface VowelSelectorProps {
  selectedVowels: string[];
  excludedLetters: string[];
  onVowelToggle: (vowel: string) => void;
  onLetterToggle: (letter: string) => void;
  onStart: () => void;
}

export default function VowelSelector({ 
  selectedVowels, 
  excludedLetters,
  onVowelToggle, 
  onLetterToggle,
  onStart 
}: VowelSelectorProps) {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Select Vowels</h2>
        <span className="text-2xl font-hebrew font-bold text-gray-600">בחר ניקוד</span>
      </div>
      <div className="grid grid-cols-3 gap-3 mb-6">
        {hebrewVowels.map((vowel) => (
          <div
            key={vowel.name}
            onClick={() => onVowelToggle(vowel.symbol)}
            className={`flex flex-col items-center p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
              selectedVowels.includes(vowel.symbol)
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {vowel.symbol ? (
              <span className="text-5xl font-hebrew mb-2">{vowel.symbol}</span>
            ) : (
              <span className="text-3xl font-hebrew mb-2">אבג</span>
            )}
            <span className="text-sm font-hebrew text-gray-600">{vowel.hebrewName}</span>
            <span className="text-xs text-gray-500">{vowel.name}</span>
          </div>
        ))}
      </div>

      <LetterSelector 
        excludedLetters={excludedLetters}
        onLetterToggle={onLetterToggle}
      />

      <button
        onClick={onStart}
        disabled={selectedVowels.length === 0}
        className="w-full mt-6 py-3 px-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        Start Practice
      </button>
    </div>
  );
}