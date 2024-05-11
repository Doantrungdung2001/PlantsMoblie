// get access token from local storage
import UserInfoAsyncStorage from "./UserInfoAsyncStorage";
let inforUser = {};
UserInfoAsyncStorage.getUserInfo("UserInfo")
  .then((result) => {
    inforUser = result.tokens;
    console.log("User Info:", inforUser);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

console.log("afsdfa", inforUser);
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
