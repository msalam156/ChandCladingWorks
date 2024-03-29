document.addEventListener('DOMContentLoaded', function() {
  var profilePic = document.querySelector('.profile-pic');
  var pictureGallery = document.querySelector('#picture-gallery');

  profilePic.addEventListener('click', function() {
    pictureGallery.classList.toggle('show-gallery');
  });
});
