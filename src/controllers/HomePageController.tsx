import Home from "../components/pages/Home/Home";
import CoinsService from "../services/Coins.service";
import { useQueries } from "react-query";
import { ICoins } from "./types";
import { ICoinImage } from "./types";

const HomePageController = () => {
  const [coinsResult, coinImageResult] = useQueries([
    {
      queryKey: "coins",
      queryFn: CoinsService.getCoinsPrice,
    },
    {
      queryKey: "coinImage",
      queryFn: CoinsService.getCoinImage,
    },
  ]);

  const coinsData = coinsResult.data as ICoins;
  const coinImageData = coinImageResult.data as ICoinImage[];

  const isLoading = coinsResult.isLoading || coinImageResult.isLoading;
  const isError = coinsResult.isError || coinImageResult.isError;

  return (
    <>
      <Home
        data={coinsData}
        coinImageUrl={coinImageData}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};

export default HomePageController;
