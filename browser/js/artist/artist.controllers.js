'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, $log, ArtistFactory, artists) {

  
  // $scope.$on('viewSwap', function (event, data) {
  //   if (data.name !== 'allArtists') return $scope.showMe = false;
    
  // });

  // $scope.viewOneArtist = function (artist) {
  //   $rootScope.$broadcast('viewSwap', { name: 'oneArtist', id: artist._id });
  // };

  $scope.artists = artists
  // ArtistFactory.fetchAll()
  // .then(artists => {
  //   $scope.artists = artists;
  // })
  // .catch($log.error);

});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, $log, $stateParams, ArtistFactory, PlayerFactory, $rootScope, artist) {

  // $scope.$on('viewSwap', function (event, data) {

  //   if (data.name !== 'oneArtist') return $scope.showMe = false;
  //   $scope.showMe = true;


  // });
    // ArtistFactory.fetchById($stateParams.artistId)
    // .then(artist => {
    //   $scope.artist = artist;
    // })
    // .catch($log.error);

    $scope.artist = artist

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.artist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.viewOneAlbum = function (album) {
    $rootScope.$broadcast('viewSwap', { name: 'oneAlbum', id: album._id });
  };

});
