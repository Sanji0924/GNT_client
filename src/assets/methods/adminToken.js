import axios from "axios";

export default function () {
  let token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
