import axios from "axios";
import {API_HOST} from '../config';

export const fetchUsers = () => {
  return axios.get(`${API_HOST}/users`);
};

export const fetchUserAlbums = (id) => {
  return axios.get(`${API_HOST}/albums?userId=${id}`);
};

export const fetchAlbumPhotos = (albumId) => {
  return axios.get(`${API_HOST}/photos?albumId=${albumId}`)
}