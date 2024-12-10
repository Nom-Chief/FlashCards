import React from 'react';
import { hebrewLetters } from '../utils/hebrewData';

interface LetterSelectorProps {
  excludedLetters: string[];
  onLetterToggle: (letter: string) => void;
}

export default function LetterSelector({ excludedLetters, onLetterToggle }: LetterSelectorProps) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Exclude Letters</h2>
        <span className="text-2xl font-hebrew font-bold text-gray-600">לְהוֹצִיא אוֹתִיּוֹת</span>
      </div>
      <div className="direction-rtl grid grid-cols-9 gap-2">
        {hebrewLetters
          .filter(letter => !['ך', 'ם', 'ן', 'ף', 'ץ'].includes(letter))
          .map((letter) => (
            <div
              key={letter}
              onClick={() => onLetterToggle(letter)}
              className={`flex items-center justify-center p-2 border-2 rounded cursor-pointer transition-all duration-200 ${
                excludedLetters.includes(letter)
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl font-hebrew">{letter}</span>
            </div>
          ))}
      </div>
      
      {/* Separate row for final forms */}
      <div className="direction-rtl grid grid-cols-5 gap-2 mt-2">
        {hebrewLetters
          .filter(letter => ['ך', 'ם', 'ן', 'ף', 'ץ'].includes(letter))
          .map((letter) => (
            <div
              key={letter}
              onClick={() => onLetterToggle(letter)}
              className={`flex items-center justify-center p-2 border-2 rounded cursor-pointer transition-all duration-200 ${
                excludedLetters.includes(letter)
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl font-hebrew">{letter}</span>
            </div>
          ))}
      </div>
    </div>
  );
}