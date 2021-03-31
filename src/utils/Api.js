const { REACT_APP_API_URL } = process.env;
export const request = () => {
  return fetch(REACT_APP_API_URL, {
    mode: "no-cors",
  })
    .then((data) => data.json())
    .then((response) => response);
};
