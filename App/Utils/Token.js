// get access token from local storage
import UserInfoAsyncStorage from "./UserInfoAsyncStorage";
let inforUser = {};

UserInfoAsyncStorage.getUserInfo("UserInfo")
  .then((result) => {
    console.log("-------result-tokens------", result.tokens);
    inforUser = result.tokens;
  })
  .catch((error) => {
    console.error("Error:", error);
  });

const getAccessToken = () => {
  return inforUser.accessToken;
};

const getRefreshToken = () => {
  return inforUser.refreshToken;
};

const token = {
  getAccessToken,
  getRefreshToken,
};
export default token;
