import axios from "axios";

const apiIstance = axios.create({
  baseURL: "http://localhost:8080/metro-line",
});

export const fetchAllMetroLines = async () => {
  try {
    const response = await apiIstance.get("/all");
    return response.data;
  } catch (e: any) {
    console.log(e);
  }

  return [];
};
