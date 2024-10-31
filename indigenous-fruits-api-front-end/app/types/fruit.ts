export interface IFruit {
  id?: string;
  uniqueid?: string;
  name: string;
  description: string;
  image?: string;
  season?: Fruit_seasons,
  province?: Provinces,
  createdAt?: string
}

export enum Fruit_seasons {
  Winter = "winter",
  Summer = "summer",
  Spring = "spring",
  Autumn = "autumn",
}

export enum Provinces {
    MASHONALAND_WEST='mashonaland-west',
    MANICALAND='manicaland',
    MASHONALAND_EST='mashonaland-east',
    matebeleland_NORTH='matebeleland-north',
    matebeleland_SOUTH='matebeleland-south',
    MASVINGO='masvingo',
    HARARE='harare',
    BULAWAYO='bulawayo',
    MASHONALAND_CENTRAL='mashonaland-central',
    MIDLANDS='midlands',
  }
  