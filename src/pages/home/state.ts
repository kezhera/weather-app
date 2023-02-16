import { useCallback, useEffect, useReducer } from "react";
import {
  getWeatherByCoordinant,
  getWeatherByQuery,
} from "../../services/getWeather";

interface homeState {
  isLoading: boolean;
  error: null | string;
  data: any;
}

type homeAction =
  | { type: "setLoader" }
  | { type: "setData"; payload: any }
  | { type: "setError"; payload: string };

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

const reducer = (state: homeState, action: homeAction) => {
  switch (action.type) {
    case "setData":
      return {
        ...state,
        error: null,
        isLoading: false,
        data: action.payload,
      };
    case "setLoader":
      return {
        ...state,
        isLoading: true,
        error: null,
        data: null,
      };
    case "setError":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        data: null,
      };
    default:
      return state;
  }
};

const useHomeState = () => {
  const [{ isLoading, error, data }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const setLoader = useCallback(() => {
    dispatch({
      type: "setLoader",
    });
  }, []);

  const setDate = useCallback((data: any) => {
    dispatch({
      type: "setData",
      payload: data,
    });
  }, []);

  const setError = useCallback((error: any) => {
    dispatch({
      type: "setError",
      payload: error,
    });
  }, []);

  const getLocationByQuery = useCallback(async (query: string) => {
    setLoader();
    try {
      const response = await getWeatherByQuery(query);
      setDate(response);
    } catch (error: any) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLoader();
        const response = await getWeatherByCoordinant(latitude, longitude);
        setDate(response);
      });
    }
  }, [setDate, setLoader]);

  return {
    isLoading,
    error,
    data,
    getLocationByQuery,
  };
};

export default useHomeState;
