import axios from "axios";

const API = axios.create({
  baseURL: "https://semana7-backend.onrender.com/api"
});

// ===============================
// ACCESS TOKEN EN MEMORIA
// ===============================
let accessToken = null;

export const setAccessToken = (token) => {
  accessToken = token;
};

export const clearAccessToken = () => {
  accessToken = null;
};

// ===============================
// REQUEST INTERCEPTOR
// ===============================
API.interceptors.request.use(
  (config) => {

    if (accessToken) {
      config.headers["x-access-token"] =
        accessToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ===============================
// RESPONSE INTERCEPTOR
// ===============================
API.interceptors.response.use(

  (response) => response,

  async (error) => {

    const originalRequest = error.config;

    // TOKEN EXPIRÓ
    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {

      originalRequest._retry = true;

      try {

        const refreshToken =
          localStorage.getItem("refreshToken");

        // PEDIR NUEVO ACCESS TOKEN
        const res = await axios.post(
          "https://semana7-backend.onrender.com/api/auth/refreshtoken",
          {
            refreshToken,
          }
        );

        // GUARDAR NUEVO TOKEN
        setAccessToken(res.data.accessToken);

        // REINTENTAR REQUEST ORIGINAL
        originalRequest.headers[
          "x-access-token"
        ] = res.data.accessToken;

        return API(originalRequest);

      } catch (err) {

        console.error(
          "Refresh token inválido"
        );

        localStorage.removeItem(
          "refreshToken"
        );

        localStorage.removeItem("user");

        window.location.href = "/login";

        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

export default API;