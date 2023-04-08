import "./styles/index.scss";
import { Space, Spin } from "antd";
import { ICoinsProps } from "./types";
import { LoadingOutlined } from "@ant-design/icons";
import CoinItem from "./components/CoinItem/CoinItem";

const Home = ({ data, coinImageUrl, isLoading, isError }: ICoinsProps) => {
  const arrayOfCoinNames = data && Object.entries(data);
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  arrayOfCoinNames?.sort((a, b) => parseFloat(b[1].usd) - parseFloat(a[1].usd));

  return (
    <>
      <div className="coins-content">
        <Space direction="vertical" size="small" style={{ display: "flex" }}>
          {arrayOfCoinNames?.map((el) => {
            const name = el[0];
            const usd =
              el[1].usd % 1 !== 0 ? el[1].usd.toFixed(3) : el[1].usd.toString();

            const change = el[1].usd_24h_change.toFixed(3);

            const coinImage = coinImageUrl?.find((coin) => coin.id === name);
            const imgSrc = coinImage?.image.large ?? "";

            return (
              <CoinItem
                key={name}
                name={name}
                usd={usd}
                change={change}
                imgSrc={imgSrc}
              />
            );
          })}
        </Space>

        {isLoading && <Spin indicator={antIcon} />}
        {isError && <span style={{ color: "#aaa" }}>Error</span>}
      </div>
    </>
  );
};

export default Home;
