import angular from 'angular';

class videoCtrl {
  constructor(videoService, $sce) {
    this.videoService = videoService;
    this.$sce = $sce;
    this.videos = this.getVideosInfo(this);
    // Next page id for new request, when user moved to the next page.
    this.nextPage;
  }

  getVideosInfo(obj, search) {
    // Getting data from video objects.
    this.videoService.getVideos(search).then(function (response) {
      let videos = response.items;
      obj.videos = createVideoUrl(videos, obj.$sce);
      obj.nextPage = response.nextPageToken;
      console.log('videos', obj.videos);
      console.log('nextPage', obj.nextPage);
    })
  }

  //TODO: Valera: write function 'findVideo' which will search videos by user request.
  // Use getVideosInfo function for this.
  // Write to the localStorage text for searching. When user will reload
  // the page he will see videos by his last request.
  findVideo(text) {
    this.getVideosInfo(this, text)
  }

};

function createVideoUrl(videos, $sce) {
  let src = 'https://www.youtube.com/embed/';

  // Add videoSrc property to each video object with video url;
  // $sce.trustAsResourceUrl - should call this function in Angular if we want to pass url to iframe.
  videos.map(n => n.videoSrc = $sce.trustAsResourceUrl(src + n.id.videoId));
  return videos;
}

videoCtrl.$inject =
  ['videoService',
    '$sce'];

let videoComponent = {
  template: require('./video.html'),
  controller: 'videoCtrl'
};

export default angular.module('videoComponent', [])
  .component('videoComponent', videoComponent)
  .controller('videoCtrl', videoCtrl)
  .name;