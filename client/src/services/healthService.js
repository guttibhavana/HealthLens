import api from "./api";

export const getHealthLogs = async () => {
  const response = await api.get("/api/health");
  return response.data;
};

export const addHealthLog = async (data) => {
  const response = await api.post("/api/health", data);
  return response.data;
};

export const updateHealthLog = async (id, data) => {
  const response = await api.put(`/api/health/${id}`, data);
  return response.data;
};

export const deleteHealthLog = async (id) => {
  const response = await api.delete(`/api/health/${id}`);
  return response.data;
};