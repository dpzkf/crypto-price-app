import { api } from "../api/api";

class CoinsService {
  async getCoinsPrice() {
    const response = await api.get("/simple/price", {
      params: {
        ids: "bitcoin,tether,ethereum,litecoin,dogecoin,cardano,ripple,binancecoin",
        vs_currencies: "usd",
        include_24hr_change: "true",
      },
    });

    return response.data;
  }
  async getCoinImage() {
    const response = await api.get(`/coins/`);
    const coinImageUrl = response.data;
    return coinImageUrl;
  }
}

const coinsService = new CoinsService();
export default coinsService;
