import angular from 'angular';

let youtubeKey = 'AIzaSyCTWC75i70moJLzyNh3tt4jzCljZcRkU8Y',
  maxResults = 10;


class videoService {
  constructor($http) {
    this.$http = $http;
  }

  /**
   *
   * @param searchValue - for searching youtube videos by user request
   * @param nextPageValue - for searching youtube videos when user moves to the next page
   * @returns Promise
   */
  getVideos(searchValue, nextPageValue) {
    let search = searchValue ? searchValue : '';
    let nextPage = nextPageValue ? nextPageValue : '';
    // Template literals are used here. Read https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    let src = `https://www.googleapis.com/youtube/v3/search?pageToken=${nextPage}&part=snippet&maxResults=${maxResults}&q=${search}&key=${youtubeKey}`;

    return this.$http.get(src).then(function(response) {
      return response.data;
    })
  }
}

videoService.$inject = ['$http'];


export default angular.module('videoService', [])
  .service('videoService', videoService)
  .name;