import axios from 'axios';
import queryString from 'query-string';
import { PublicationInterface, PublicationGetQueryInterface } from 'interfaces/publication';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPublications = async (
  query?: PublicationGetQueryInterface,
): Promise<PaginatedInterface<PublicationInterface>> => {
  const response = await axios.get('/api/publications', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPublication = async (publication: PublicationInterface) => {
  const response = await axios.post('/api/publications', publication);
  return response.data;
};

export const updatePublicationById = async (id: string, publication: PublicationInterface) => {
  const response = await axios.put(`/api/publications/${id}`, publication);
  return response.data;
};

export const getPublicationById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/publications/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePublicationById = async (id: string) => {
  const response = await axios.delete(`/api/publications/${id}`);
  return response.data;
};
