import angular from 'angular';

class videoCtrl {
  constructor(videoService, $sce) {
    let videos;
    let that = this;

    // Getting video objects data.
    videoService.getVideosInfo().then(function (response) {
      console.log(response.items)
      let videos = response.items;
      that.videos = createVideoUrl(videos, $sce);
      console.log('that.videos', that.videos)
    })
  }

};

function createVideoUrl(videos, $sce) {
  // Passing iframe url as trusted to the template.
  let src = 'https://www.youtube.com/embed/';

  // Add videoSrc property to each video object with video url;
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

export default angular.module('videoComponent',[])
  .component('videoComponent', videoComponent)
  .controller('videoCtrl', videoCtrl)
  .name;