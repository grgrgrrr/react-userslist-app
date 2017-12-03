import React, {Component} from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Radium from 'radium';

import {colors, shadow} from '../theme.js';
import Card from '../components/Card';
import { fetchPhotos, clearPhotos, fetchAlbums } from '../actions/actions';
import { formatAlbumName } from '../formatters';

const styles = {
    photosContainer: {
        marginTop: '1em',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirecrion: 'row',
        justifyContent: 'space-between',
        '@media only screen and (max-width: 1200px)': {
            justifyContent: 'center',
        },
        '@media screen and (max-device-width: 1200px)': {
            justifyContent: 'center',
        }
    },
    card: {
        ':hover': {
            boxShadow:  shadow.normal,
            cursor: 'normal'
        },
        '@media only screen and (max-width: 1070px)': {
            width: '35%'
        },
        '@media screen and (max-device-width: 1070px)': {
            width: '35%'
        }
    },
    imageContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    image: {
        maxWidth: '100%',
        height: 'auto',
        ':hover': {
            boxShadow: shadow.highlighted,
            cursor: 'pointer'
        }
    }
};

class PhotosPage extends Component {
    componentWillMount(){
        if (!this.props.albums || this.props.albums.length === 0){
            this.props.fetchAlbums(this.props.params.id);
        }
        this.props.fetchPhotos(this.props.params.albumId)
    }

    componentWillUnmount(){
        this.props.clearPhotos();
    }

    componentWillReceiveProps(nextProps){
        if (this.props.params.albumId !== nextProps.params.albumId){
            this.props.fetchPhotos(nextProps.params.albumId)
        }
    }

    render() {
        const {currentAlbum, albums, photos} = this.props;
        if (!currentAlbum || !albums) return null;
        const album = currentAlbum || albums.find(album => album.id == this.props.params.albumId);
        if (!album) return null;

        return <div style={styles.photosContainer}>
                {
                    photos.map(photo =>
                        <Card key={photo.id}
                              title={formatAlbumName(photo.title)}
                              style={styles.card}
                        >
                            <div key="imageContainer" style={styles.imageContainer}>
                                <a href={photo.url} target="_blank">
                                    <img key="image" src={photo.thumbnailUrl} style={styles.image}/>
                                </a>
                            </div>
                        </Card>
                    )
                }
            </div>

    }
}

PhotosPage.propTypes = {};

export default connect(
    (state, props) => ({
        photos: state.photos,
        albums: state.albums,
        currentAlbum: state.albums.find(album => album.id == props.params.albumId)
    }),
    dispatch => ({
        fetchPhotos: id => { dispatch(fetchPhotos(id)) },
        clearPhotos: () => { dispatch(clearPhotos()) },
        fetchAlbums: (userId) => { dispatch(fetchAlbums(userId)) }
    })
)(Radium(PhotosPage));