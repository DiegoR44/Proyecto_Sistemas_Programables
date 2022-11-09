import { ulr } from "./ulr";

import axios from "axios";

export default axios.create({
  baseURL: ulr,
  headers: {
    "Content-type": "application/json",
  },
});
