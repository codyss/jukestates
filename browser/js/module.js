'use strict';

var juke = angular.module('juke', ['ui.router']);




juke.config(function($stateProvider) {
  $stateProvider.state('allAlbums', {
    //specifies the state to show all albums
    url: '/albums',
    templateUrl: '/allAlbums.html',
    resolve: {
      albums: function(AlbumFactory) {
        return AlbumFactory.fetchAll()
      }
    },
    controller: 'AlbumsCtrl'
  })
})

.config(function($stateProvider) {
  $stateProvider.state('allArtists', {
    //specifies the state to show all artists
    url: '/artists',
    templateUrl: '/allArtists.html',
    resolve: {
      artists: function(ArtistFactory) {
        return ArtistFactory.fetchAll()
      }
    },
    controller: 'ArtistsCtrl'
  })
})

.config(function($stateProvider) {
  $stateProvider.state('album', {
    //specifies the state to show all artists
    url: '/album/:albumId',
    templateUrl: '/album.html',
    resolve: {
      album: function(AlbumFactory, $stateParams) {
        return AlbumFactory.fetchById($stateParams.albumId)
      }
    },
    controller: 'AlbumCtrl'
  })
})

.config(function($stateProvider) {
  $stateProvider.state('artist', {
    //specifies the state to show all artists
    url: '/artist/:artistId',
    templateUrl: '/artist.html',
    resolve: {
      artist: function(ArtistFactory, $stateParams) {
        return ArtistFactory.fetchById($stateParams.artistId);
      }
    },
    controller: 'ArtistCtrl'
  })
})


.config(function($stateProvider) {
  $stateProvider.state('artist.albums', {
    //specifies the state to show all artists
    url: '/albums',
    templateUrl: '/artist-albums.html'
  })
})

.config(function($stateProvider) {
  $stateProvider.state('artist.songs', {
    //specifies the state to show all artists
    url: '/songs',
    templateUrl: '/songs.html'
  })
})
