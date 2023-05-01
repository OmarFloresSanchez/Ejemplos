let currentIndex = null;
let albumView=new Album("#album-view");
for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = albumView.createImage(photoSrc);
    image.dataset.index = i;
    image.addEventListener('click', albumView.onThumbnailClick());
    albumView.appendChild(image);
  }
  
  const modalView = document.querySelector('#modal-view');
  modalView.addEventListener('click', albumView.onModalClick());