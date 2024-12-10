import React, { useState } from 'react';
import VowelSelector from './components/VowelSelector';
import Flashcard from './components/Flashcard';
import { generateFlashcard, hebrewLetters } from './utils/hebrewData';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const [selectedVowels, setSelectedVowels] = useState<string[]>([]);
  const [excludedLetters, setExcludedLetters] = useState<string[]>([]);
  const [isPracticing, setIsPracticing] = useState(false);
  const [currentCard, setCurrentCard] = useState('');

  const {
    trackVowelToggle,
    trackLetterToggle,
    trackPracticeStart,
    trackNextCard,
    trackPracticeEnd,
  } = useAnalytics();

  const handleVowelToggle = (vowel: string) => {
    setSelectedVowels(prev =>
      prev.includes(vowel)
        ? prev.filter(v => v !== vowel)
        : [...prev, vowel]
    );
    trackVowelToggle(vowel);
  };

  const handleLetterToggle = (letter: string) => {
    setExcludedLetters(prev =>
      prev.includes(letter)
        ? prev.filter(l => l !== letter)
        : [...prev, letter]
    );
    trackLetterToggle(letter);
  };

  const startPractice = () => {
    if (selectedVowels.length > 0 && excludedLetters.length < hebrewLetters.length) {
      setIsPracticing(true);
      generateNextCard();
      trackPracticeStart(selectedVowels.length, excludedLetters.length);
    }
  };

  const generateNextCard = () => {
    const newCard = generateFlashcard(selectedVowels, excludedLetters);
    setCurrentCard(newCard);
    trackNextCard(newCard);
  };

  const handleBack = () => {
    setIsPracticing(false);
    setCurrentCard('');
    trackPracticeEnd();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-hebrew font-bold text-gray-600 mb-2">
            כַּרְטִיסֵי זִכָּרוֹן שֶׁל אוֹתִיּוֹת עִבְרִיּוֹת
          </h1>
          <h2 className="text-4xl font-bold text-gray-800">
            Hebrew Letter Flashcards
          </h2>
        </div>
        
        {!isPracticing ? (
          <VowelSelector
            selectedVowels={selectedVowels}
            excludedLetters={excludedLetters}
            onVowelToggle={handleVowelToggle}
            onLetterToggle={handleLetterToggle}
            onStart={startPractice}
          />
        ) : (
          <Flashcard
            content={currentCard}
            onNext={generateNextCard}
            onBack={handleBack}
          />
        )}

        <div className="text-center mt-8">
          <a 
            href="https://www.productsnotpowerpoints.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            A project of <span className="text-blue-600 font-semibold">Chaim G</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;