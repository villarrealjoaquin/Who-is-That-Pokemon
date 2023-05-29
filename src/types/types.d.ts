export interface PokemonType {
  name: string;
  sprites: {
    front_default: string;
  };
}

export interface PropsButtonOptions {
  option: string
  handleClick: (option: string, e: any) => void
  isDisable: boolean
}

export interface PropsList {
  options: Array<string>
  handleClick: (option: String, e: React.ChangeEvent<HTMLInputElement>) => void
  isCorrect: boolean
  currentPokemon: PokemonType
  isDisable: boolean
  nextPokemonTime: number
  pokemonName: boolean
  showTime: boolean
}
