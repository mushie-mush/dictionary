import { fireEvent, render, screen } from '@testing-library/react';
import DictionaryEntry from '../../components/DictionaryEntry';

const mockEntry = {
  language: {
    code: 'en',
    name: 'English',
  },
  partOfSpeech: 'noun',
  pronunciations: [
    {
      type: 'ipa',
      text: '/kəmˈpjuːtə/',
      tags: ['Received Pronunciation'],
    },
    {
      type: 'ipa',
      text: '/kəmˈpjutɚ/',
      tags: ['General American'],
    },
    {
      type: 'ipa',
      text: '[kəmˈpʰjuɾɚ]',
      tags: ['General American'],
    },
  ],
  forms: [
    {
      word: 'computers',
      tags: ['plural'],
    },
  ],
  senses: [
    {
      definition:
        '(now rare, chiefly historical) A person employed to perform computations; one who computes.',
      tags: ['archaic', 'historical'],
      examples: [],
      quotes: [
        {
          text: 'I haue read the truest computer of Times, and the best Arithmetician that euer breathed, and he reduceth thy dayes into a short number: The daies of Man are threescore and ten.',
          reference:
            '1613, Richard Brathwait, The Yong Mans Gleanings, page 1:',
        },
        {
          text: 'By which manner of ſpeaking, this Propheteſs, who is ſo exact a Computer, would have us, I ſuppoſe, to conclude, that it would be a great miſtake to think that the number of Angels was either 9, or 11 for one of Men.',
          reference:
            '1674, “To the Guardian-Angel”, in Reflexions upon the Devotions of the Roman Church, London: Richard Royston, page 419:',
        },
        {
          text: 'Only a few years ago Mr. Powers, an American computer, disproved a hypothesis about prime numbers which had held the field for more than 250 years.',
          reference:
            '1927, J. B. S. Haldane, Possible Worlds and Other Essays, London: Chatto & Windus, page 173:',
        },
        {
          text: 'During World War II, scientific laboratories had rooms full of people doing different parts of a complicated calculation using pencil and paper, slide rules, and mechanical calculators. At that time, the word computer referred to a person, and those group calculations may be viewed as the early steps of parallel computing.',
          reference:
            '2001, Michael L. overton, Numerical Computing with IEEE Floating Point Arithmetic, SIAM, page 1:',
        },
        {
          text: 'One Harvard computer, Annie Jump Cannon, used her repetitive acquaintance with the stars to devise a system of stellar classifications so practical that it is still in use today.',
          reference:
            '2003, Bill Bryson, A Short History of Nearly Everything, BCA, page 116:',
        },
      ],
      synonyms: ['computator', 'mental calculator', 'human calculator'],
      antonyms: [],
      subsenses: [
        {
          definition: '(by restriction, chiefly historical) A male computer.',
          tags: ['archaic', 'historical'],
          examples: ['Coordinate term: (female) computress'],
          quotes: [],
          synonyms: ['computator', 'mental calculator', 'human calculator'],
          antonyms: [],
          translations: [],
          subsenses: [],
        },
      ],
    },
    {
      definition:
        'A programmable electronic device that performs mathematical calculations and logical operations, especially one that can process, store and retrieve large amounts of data very quickly; now especially, a small one for personal or home use employed for manipulating text or graphics, accessing the Internet, or playing games or media.',
      tags: [],
      examples: [
        'I spend around 6 hours a day at the computer.',
        'As well as saving the photos on my computer, I have them backed up on a USB drive.',
        'David is a computer expert.',
        'Janet works at the computer store.',
      ],
      quotes: [],
      synonyms: ['processor', "'puter", 'box', 'machine', 'calculator'],
      antonyms: [],
      subsenses: [],
    },
  ],
  synonyms: [
    "'puter",
    'box',
    'calculator',
    'computer',
    'electronic brain',
    'electronic computer',
    'machine',
    'number cruncher',
    'thinking machine',
  ],
  antonyms: [],
  id: 'computer-noun',
  word: 'computer',
};

const mockUseSavedWords = {
  addSavedWords: vi.fn(),
  removeSavedWords: vi.fn(),
  isWordSaved: vi.fn(),
};

vi.mock('../../hooks/useSavedWords', () => ({
  useSavedWords: () => mockUseSavedWords,
}));

describe('dictionary entry component', () => {
  it('renders dictionary entry', () => {
    mockUseSavedWords.isWordSaved.mockReturnValueOnce(false);

    render(<DictionaryEntry entry={mockEntry} />);

    expect(screen.getByText('computer')).toBeInTheDocument();
    expect(screen.getByText('en')).toBeInTheDocument();
    expect(screen.getByText('· noun')).toBeInTheDocument();
  });

  it('handles save and unsave word functionality', () => {
    mockUseSavedWords.isWordSaved.mockReturnValueOnce(false);

    render(<DictionaryEntry entry={mockEntry} />);
    const saveButton = screen.getByRole('button');

    fireEvent.click(saveButton);
    expect(mockUseSavedWords.addSavedWords).toHaveBeenCalledWith(mockEntry);

    mockUseSavedWords.isWordSaved.mockReturnValueOnce(true);
    fireEvent.click(saveButton);
    expect(mockUseSavedWords.removeSavedWords).toHaveBeenCalledWith(
      mockEntry.id
    );
  });
});
