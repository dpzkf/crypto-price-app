import { ICoinImage, ICoins } from "../../../../controllers/types";

export interface ICoinsProps {
  data: ICoins;
  coinImageUrl: ICoinImage[];
  isLoading: boolean;
  isError: boolean;
}
