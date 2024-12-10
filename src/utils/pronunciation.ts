// Basic letter sounds without vowels
const letterSoundMap: Record<string, string> = {
  'א': 'א',  // Silent consonant
  'בּ': 'בּ',  // B sound with dagesh
  'ב': 'בְ',   // V sound without dagesh
  'ג': 'גְ',   // Soft G sound
  'ד': 'דְ',   // Soft D sound
  'ה': 'ה',   // Slight H sound
  'ו': 'וְ',
  'ז': 'זְ',
  'ח': 'חְ',
  'ט': 'טְ',
  'י': 'יְ',
  'כּ': 'כּ',  // K sound with dagesh
  'כ': 'כְ',   // Kh sound without dagesh
  'ל': 'לְ',
  'מ': 'מְ',
  'נ': 'נְ',
  'ס': 'סְ',
  'ע': 'ע',   // Silent consonant
  'פּ': 'פּ',  // P sound with dagesh
  'פ': 'פְ',   // F sound without dagesh
  'צ': 'צְ',
  'ק': 'קְ',
  'ר': 'רְ',   // R sound
  'שׁ': 'שׁ',  // Sh sound
  'שׂ': 'שׂ',  // S sound
  'תּ': 'תּ',  // Hard T sound with dagesh
  'ת': 'תְ',   // Soft T sound without dagesh
  'ך': 'ךְ',
  'ם': 'םְ',
  'ן': 'ןְ',
  'ף': 'ףְ',
  'ץ': 'ץְ'
};

export const getLetterSound = (content: string): string => {
  // If the content already has a vowel, return it as is
  if (content.length > 1) {
    return content;
  }
  
  // Otherwise, return the basic sound of the letter
  return letterSoundMap[content] || content;
};