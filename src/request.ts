import axios from "axios";

const API_CATS = "https://api.thecatapi.com/v1/images/search";
const KEY_API =
  "live_7iO8SNru49zjCpG59LR6PjsfHZRduveItc8wdMVNNzkmYpB0D6wwAZNwVMEWFooZ";

export const getCats = axios({
  url: `${API_CATS}`,
  method: "GET",
  params: { limit: 100, api_key: `${KEY_API}` },
});
