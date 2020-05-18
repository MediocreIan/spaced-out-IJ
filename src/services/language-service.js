import config from "../config";

const languageService = {
  setWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem(
          "blogful-client-auth-token"
        )}`,
      },
    }).then((res) => {
      return res.json();
    });
  },
};
export default languageService;
