import axios from 'axios';
import queryString from 'query-string';
import { EditInterface, EditGetQueryInterface } from 'interfaces/edit';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getEdits = async (query?: EditGetQueryInterface): Promise<PaginatedInterface<EditInterface>> => {
  const response = await axios.get('/api/edits', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createEdit = async (edit: EditInterface) => {
  const response = await axios.post('/api/edits', edit);
  return response.data;
};

export const updateEditById = async (id: string, edit: EditInterface) => {
  const response = await axios.put(`/api/edits/${id}`, edit);
  return response.data;
};

export const getEditById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/edits/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEditById = async (id: string) => {
  const response = await axios.delete(`/api/edits/${id}`);
  return response.data;
};
