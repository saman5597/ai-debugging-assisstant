import axios from 'axios';

import { DebugReport } from '../types/debug';

const ENV = import.meta.env.VITE_ENV;
const API_BASE_URL =
  ENV == 'DEVELOPMENT'
    ? 'http://localhost:5225/api'
    : `${import.meta.env.VITE_BASEURL}/api`;

export const fetchDebugReport = async (id: string): Promise<DebugReport> => {
  const response = await axios.get(`${API_BASE_URL}/debug/report/${id}`);

  return response.data.data;
};
