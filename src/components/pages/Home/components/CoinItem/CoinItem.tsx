import { Card } from "antd";
import clsx from "clsx";
import { ICoinItemProps } from "./types";
const { Meta } = Card;

const CoinItem = ({ name, change, imgSrc, usd }: ICoinItemProps) => {
  return (
    <Card
      key={name}
      className={clsx("coin", {
        "coin-rising": change > 0,
        "coin-falling": change <= 0,
      })}
      bordered={false}
    >
      <Meta
        avatar={<img src={imgSrc} alt={name} />}
        title={
          <>
            <span>
              {name}
              <span className="ant-card-meta-title_currency">/USD</span>
            </span>
            <span className="ant-card-meta-title_price">{usd}</span>
          </>
        }
        description={change}
      />
    </Card>
  );
};

export default CoinItem;
