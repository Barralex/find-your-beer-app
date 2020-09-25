import axios from "axios";
import humps from "humps";

const API_URL = "https://api.openbrewerydb.org";

class HttpClient {
  static async headers() {
    return {
      "Content-Type": "application/json;charset=UTF-8",
    };
  }

  static handleError(error) {
    if (axios.isCancel(error)) {
      // request cancelled
    } else {
      throw error;
    }
  }

  get = async (url, params) => {
    try {
      const headers = await HttpClient.headers();
      const result = await axios.get(`${API_URL}/${url}`, {
        headers,
        params: humps.decamelizeKeys(params),
      });
      return humps.camelizeKeys(result).data;
    } catch (error) {
      return HttpClient.handleError(error);
    }
  };

  post = async (url, body) => {
    try {
      const headers = await HttpClient.headers();
      const result = await axios.post(
        `${API_URL}/${url}`,
        humps.decamelizeKeys(body),
        {
          headers,
        }
      );
      return humps.camelizeKeys(result).data;
    } catch (error) {
      return HttpClient.handleError(error);
    }
  };

  delete = async (url, params) => {
    try {
      const headers = await HttpClient.headers();
      const result = await axios.delete(`${API_URL}/${url}`, {
        headers,
        params: humps.decamelizeKeys(params),
      });
      return humps.camelizeKeys(result).data;
    } catch (error) {
      return HttpClient.handleError(error);
    }
  };

  put = async (url, body) => {
    try {
      const headers = await HttpClient.headers();
      const result = await axios.put(
        `${API_URL}/${url}`,
        humps.decamelizeKeys(body),
        {
          headers,
        }
      );
      return humps.camelizeKeys(result).data;
    } catch (error) {
      return HttpClient.handleError(error);
    }
  };

  patch = async (url, body) => {
    try {
      const headers = await HttpClient.headers();
      const result = await axios.patch(
        `${API_URL}/${url}`,
        humps.decamelizeKeys(body),
        {
          headers,
        }
      );
      return humps.camelizeKeys(result).data;
    } catch (error) {
      return HttpClient.handleError(error);
    }
  };
}

export default new HttpClient();
