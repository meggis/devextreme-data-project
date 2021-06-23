import axios from "axios";

export default (baseUrl) => {
  const instance = axios.create({ baseURL: baseUrl });

  instance.setLocaleInterceptor = function (localeState) {
    this.interceptors.request.use((config) => {
      if (config.params) {
        config.params.locale = localeState.selected;
      }

      return config;
    });
  };

  return instance;
};
