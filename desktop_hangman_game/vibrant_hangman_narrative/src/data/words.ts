export interface WordEntry {
  word: string;
  definition: string;
}

export interface WordCategory {
  name: string;
  icon: string;
  words: WordEntry[];
}

export const wordCategories: WordCategory[] = [
  {
    name: 'Animals',
    icon: 'paw-print',
    words: [
      { word: 'ELEPHANT', definition: 'A large mammal with a trunk and large ears.' },
      { word: 'GIRAFFE', definition: 'The tallest land animal known for its long neck.' },
      { word: 'DOLPHIN', definition: 'A highly intelligent marine mammal.' },
      { word: 'PENGUIN', definition: 'A flightless aquatic bird native to the Southern Hemisphere.' },
      { word: 'CHEETAH', definition: 'The fastest land animal on Earth.' },
      { word: 'OCTOPUS', definition: 'A cephalopod mollusk with eight arms.' },
      { word: 'BUTTERFLY', definition: 'An insect with large colorful wings.' },
      { word: 'KANGAROO', definition: 'A marsupial known for hopping on its powerful hind legs.' },
      { word: 'FLAMINGO', definition: 'A long-legged bird known for its bright pink plumage.' },
      { word: 'RACCOON', definition: 'A masked, nocturnal mammal known for its dexterous paws.' },
      { word: 'PANDA', definition: 'A Chinese bear species known for its distinctive black and white coat.' },
      { word: 'TURTLE', definition: 'A reptile with a protective shell.' },
    ],
  },
  {
    name: 'Movies',
    icon: 'clapperboard',
    words: [
      { word: 'TITANIC', definition: 'A 1997 epic romance disaster film directed by James Cameron.' },
      { word: 'GLADIATOR', definition: 'A 2000 historical action drama starring Russell Crowe.' },
      { word: 'INCEPTION', definition: "A 2010 science fiction film about dreams within dreams, by Christopher Nolan." },
      { word: 'JAWS', definition: 'A 1975 thriller about a giant great white shark.' },
      { word: 'ALIEN', definition: 'A 1979 science fiction horror film directed by Ridley Scott.' },
      { word: 'FROZEN', definition: 'A 2013 animated musical fantasy by Disney.' },
      { word: 'AVATAR', definition: "A 2009 science fiction film set on the moon of Pandora, by James Cameron." },
      { word: 'CASABLANCA', definition: 'A 1942 romantic drama set during World War II.' },
      { word: 'MAVRICK', definition: 'A classic western film about a daring gambler.' },
      { word: 'ROCKY', definition: 'A 1976 boxing drama about an underdog fighter.' },
      { word: 'CODA', definition: 'A 2021 musical drama about a hearing teen in a deaf family.' },
      { word: 'DRACULA', definition: 'A classic Gothic horror novel by Bram Stoker, adapted into many films.' },
    ],
  },
  {
    name: "Science",
    icon: 'flask-conical',
    words: [
      { word: 'PHOTOSYNTHESIS', definition: 'The process by which green plants use sunlight to make food.' },
      { word: 'GRAVITY', definition: 'The force that attracts two bodies toward each other.' },
      { word: 'MOLECULE', definition: 'A group of atoms bonded together.' },
      { word: 'ELECTRON', definition: 'A negatively charged elementary particle.' },
      { word: 'NEUTRON', definition: 'An electrically neutral subatomic particle.' },
      { word: 'GENETICS', definition: 'The study of heredity and variation of inherited characteristics.' },
      { word: 'ENZYME', definition: 'A protein that catalyzes biological reactions.' },
      { word: 'MITOSIS', definition: 'The process of cell division producing two identical cells.' },
      { word: 'ISOTOPE', definition: 'A variant of a chemical element with a different number of neutrons.' },
      { word: 'PLASMA', definition: 'A high-energy state of matter consisting of ionized gas.' },
      { word: 'QUANTUM', definition: 'The minimum amount of a physical entity involved in an interaction.' },
      { word: 'VOLTAGE', definition: 'The difference in electric potential between two points.' },
    ],
  },
  {
    name: 'Geography',
    icon: 'globe',
    words: [
      { word: 'CONTINENT', definition: 'One of the Earth\'s large continuous landmasses.' },
      { word: 'VALLEY', definition: 'A low area between hills or mountains.' },
      { word: 'GLACIER', definition: 'A persistent body of ice that moves slowly over land.' },
      { word: 'ATOLLS', definition: 'Ring-shaped coral reefs surrounding a lagoon.' },
      { word: 'DESERT', definition: 'A dry area with very little rainfall and sparse vegetation.' },
      { word: 'MEANDER', definition: 'A winding curve or bend in a river or road.' },
      { word: 'TUNDRA', definition: 'A treeless plateau in the Arctic regions with frozen ground.' },
      { word: 'PLATEAU', definition: 'A flat area of land that is higher than surrounding land.' },
      { word: 'VOLCANO', definition: 'A mountain or hill with a vent through which lava erupts.' },
      { word: 'ARCHIPELAGO', definition: 'A group of islands forming a cluster.' },
      { word: 'ISTHMUS', definition: 'A narrow strip of land connecting two larger land areas.' },
      { word: 'LAGOON', definition: 'A shallow body of water separated from a larger sea by reefs.' },
    ],
  },
  {
    name: 'Food',
    icon: 'utensils-crossed',
    words: [
      { word: 'SPAGHETTI', definition: 'A type of long, thin dried pasta.' },
      { word: 'BISCUIT', definition: 'A small bread product, leavened and baked.' },
      { word: 'CROISSANT', definition: 'A crescent-shaped buttery pastry.' },
      { word: 'AVOCADO', definition: 'A tropical fruit with creamy flesh used in salads and toast.' },
      { word: 'CHOCOLATE', definition: 'A sweet food made from roasted cacao beans.' },
      { word: 'NOODLES', definition: 'Long strips of dough, usually boiled and served with sauce.' },
      { word: 'BROCCOLI', definition: 'A plant with clusters of tiny green flowers used as a vegetable.' },
      { word: 'MARGARINE', definition: 'A butter substitute made from vegetable oils.' },
      { word: 'PANCAKE', definition: 'A flat cake made from batter cooked on a griddle.' },
      { word: 'OMELETTE', definition: 'A cooked dish of beaten eggs folded around a filling.' },
      { word: 'QUINOA', definition: 'A grain-like pseudocereal native to South America.' },
      { word: 'SAFFRON', definition: 'A precious spice derived from the crocus flower.' },
    ],
  },
  {
    name: 'Tech',
    icon: 'monitor',
    words: [
      { word: 'ALGORITHM', definition: 'A step-by-step procedure for solving a problem.' },
      { word: 'BANDWIDTH', definition: 'The maximum data transfer rate of a network.' },
      { word: 'DATABASE', definition: 'An organized collection of structured data.' },
      { word: 'FRAMEWORK', definition: 'A platform for developing applications with reusable code.' },
      { word: 'KEYBOARD', definition: 'A mechanical or electronic typewriter with keys.' },
      { word: 'MONITOR', definition: 'A screen that displays visual output from a computer.' },
      { word: 'PROTOCOL', definition: 'A set of rules governing data exchange.' },
      { word: 'TERMINAL', definition: 'An interface for entering commands to a computer.' },
      { word: 'WIRELESS', definition: 'Communication without physical connections.' },
      { word: 'CLOUD', definition: 'Remote servers used for data storage and computing.' },
      { word: 'ROUTER', definition: 'A device that forwards data between computer networks.' },
      { word: 'SERVER', definition: 'A computer that provides services to other computers.' },
    ],
  },
];

export function pickRandomWord(category: string): WordEntry | undefined {
  const cat = wordCategories.find((c) => c.name === category);
  if (!cat || cat.words.length === 0) return undefined;
  const idx = Math.floor(Math.random() * cat.words.length);
  return cat.words[idx];
}
