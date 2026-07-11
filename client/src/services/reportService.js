import api from "./api";

export const downloadReport = () => {
  return api.get("/reports");
};