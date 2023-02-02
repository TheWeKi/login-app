import {clientUrl} from "./urlClient/urlClient";

export const loginApi = (data) => clientUrl.post("/auth/login", data);
export const registerApi = (data) => clientUrl.post("/auth/register", data);
