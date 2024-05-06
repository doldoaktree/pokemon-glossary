
export default interface ResponseData {
  abilities: AbilityData[];
  base_experience: number;
  cries: Cries;
  forms: FormData[];
}

interface Ability {
  name: string;
  url: string;
}

interface AbilityData {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface Cries {
  latest: string;
  legacy: string;
}

interface FormData {
  name: string;
  url: string;
}
