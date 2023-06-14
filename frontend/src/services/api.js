import axios from "axios";
import Cookies from "js-cookie";

const csrftoken = Cookies.get("csrftoken");
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export const getMajors = async (url) => {
  try {
    const res = await axios({
      method: "get",
      url: "/subject/load-majors",
      headers: {
        "X-CSRFToken": csrftoken,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (e) {
    return e.message;
  }
};

/*
const getSbjStat = (id) => {
  1개 과목의 통계정보
  axios
    .get(url + "/read", {
      params: {
        subjectId: id,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.log(e);
    });
};
*/
