// Hebrew letters and their Unicode representations
export const hebrewLetters = [
  'א', 'בּ', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט', 'י',
  'כּ', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פּ', 'פ', 'צ', 'ק', 'ר',
  'שׁ', 'שׂ', 'תּ', 'ת', 'ך', 'ם', 'ן', 'ף', 'ץ'
];

export const hebrewVowels = [
  { name: 'Patach', hebrewName: 'פַתַח', symbol: '\u05B7', transliteration: 'a' },
  { name: 'Kamatz', hebrewName: 'קָמַץ', symbol: '\u05B8', transliteration: 'a' },
  { name: 'No Vowels', hebrewName: 'בְּלִי נִיקוּד', symbol: '', transliteration: '' },
  { name: 'Chirik', hebrewName: 'חִירִיק', symbol: '\u05B4', transliteration: 'i' },
  { name: 'Tzere', hebrewName: 'צֵירֵי', symbol: '\u05B5', transliteration: 'e' },
  { name: 'Segol', hebrewName: 'סֶגוֹל', symbol: '\u05B6', transliteration: 'e' },
  { name: 'Shva', hebrewName: 'שְׁוָא', symbol: '\u05B0', transliteration: 'ə' },
  { name: 'Kubutz', hebrewName: 'קֻבּוּץ', symbol: '\u05BB', transliteration: 'u' },
  { name: 'Cholam', hebrewName: 'חוֹלָם', symbol: '\u05B9', transliteration: 'o' },
];

export const generateFlashcard = (selectedVowels: string[], excludedLetters: string[]): string => {
  const availableLetters = hebrewLetters.filter(letter => !excludedLetters.includes(letter));
  if (availableLetters.length === 0) return ''; // Return empty if all letters are excluded
  
  const randomLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
  
  // If "No Vowels" is selected (empty string in selectedVowels), include it in the possible outcomes
  const possibleOutcomes = [...selectedVowels];
  const shouldIncludeNoVowel = selectedVowels.includes('');
  
  // Randomly decide whether to show a letter with or without a vowel
  if (shouldIncludeNoVowel && Math.random() < 0.5) {
    return randomLetter;
  }
  
  // Filter out the empty string (No Vowels) for vowel selection
  const availableVowels = possibleOutcomes.filter(v => v !== '');
  if (availableVowels.length === 0) {
    return randomLetter;
  }
  
  const randomVowel = availableVowels[Math.floor(Math.random() * availableVowels.length)];
  return `${randomLetter}${randomVowel}`;
};