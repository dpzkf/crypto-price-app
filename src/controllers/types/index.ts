export interface ICoin {
  usd: number;
  usd_24h_change: number;
}

export interface ICoins {
  bitcoin: ICoin;
  dogecoin: ICoin;
  litecoin: ICoin;
  tether: ICoin;
}

export interface ICoinImage {
  id: string;
  image: { large: string };
}
