export const fetchUsers = () => ({
    type: 'USERS_FETCH_REQUESTED'
});

export const fetchAlbums = id => ({
    type: 'ALBUMS_FETCH_REQUESTED',
    payload: id
});

export const clearAlbums = () => ({
    type: 'ALBUMS_CLEAR'
});

export const fetchPhotos = id => ({
    type: 'PHOTOS_FETCH_REQUESTED',
    payload: id
});

export const clearPhotos = () => ({
    type: 'PHOTOS_CLEAR'
});