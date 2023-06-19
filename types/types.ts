export interface Pokemon extends NameURL {}

export interface PokemonDetail {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: Held_Items[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites?: Sprites;
  stats: Stats[];
  types: Type[];
  past_types: Past_Types[];
}

export interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NameURL;
}

export interface Form {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: NameURL;
}

export interface Held_Items {
  item: NameURL;
  version_details: [
    {
      rarity: number;
      version: NameURL;
    },
  ];
}

export interface Move {
  move: NameURL;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  version_group: NameURL;
  move_learn_method: NameURL;
}

export type Species = NameURL;

export type NameURL = {
  name: string;
  url?: string;
};

export interface Past_Types {
  generation: NameURL;
  types: Type[];
}

export interface Type {
  slot: number;
  type: NameURL;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: NameURL;
}

export interface Sprites {
  back_default?: string;
  back_female?: string;
  back_shiny?: string;
  back_shiny_female?: string;
  front_default?: string;
  front_female?: string;
  front_shiny?: string;
  front_shiny_female?: string;
  other: any;
  versions: any;
}
