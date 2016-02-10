'use strict';

var juke = angular.module('juke', ['ui.router']);


juke.config(function($stateProvider) {
  $stateProvider.state('allAlbums', {
    //specifies the state to show all albums
    url: '/albums',
    templateUrl: '/allAlbums.html',
    controller: 'AlbumsCtrl'
  })
})

juke.config(function($stateProvider) {
  $stateProvider.state('allArtists', {
    //specifies the state to show all artists
    url: '/artists',
    templateUrl: '/allArtists.html',
    controller: 'ArtistsCtrl'
  })
})

juke.config(function($stateProvider) {
  $stateProvider.state('album', {
    //specifies the state to show all artists
    url: '/album/:albumId',
    templateUrl: '/album.html',
    controller: 'AlbumCtrl'
  })
})

juke.config(function($stateProvider) {
  $stateProvider.state('artist', {
    //specifies the state to show all artists
    url: '/artist/:artistId',
    templateUrl: '/artist.html',
    controller: 'ArtistCtrl'
  })
})