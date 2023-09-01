import axios from 'axios';
import queryString from 'query-string';
import { PaperInterface, PaperGetQueryInterface } from 'interfaces/paper';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPapers = async (query?: PaperGetQueryInterface): Promise<PaginatedInterface<PaperInterface>> => {
  const response = await axios.get('/api/papers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPaper = async (paper: PaperInterface) => {
  const response = await axios.post('/api/papers', paper);
  return response.data;
};

export const updatePaperById = async (id: string, paper: PaperInterface) => {
  const response = await axios.put(`/api/papers/${id}`, paper);
  return response.data;
};

export const getPaperById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/papers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePaperById = async (id: string) => {
  const response = await axios.delete(`/api/papers/${id}`);
  return response.data;
};
