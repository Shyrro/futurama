interface Character {
  name: Name;
  images: Images;
  gender: string;
  species: string;
  homePlanet: string;
  occupation: string;
  sayings: string[];
  id: number;
  age: string;
}

interface Images {
  "head-shot": string;
  main: string;
}

interface Name {
  first: string;
  middle: string;
  last: string;
}
