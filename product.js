document.addEventListener("DOMContentLoaded", function(){
    const galleryImages = document.querySelectorAll('.gallery-image');
    const modal = document.getElementById('modal');
    const modalImage = document.querySelector('.modal-image');
    const closeButton = document.querySelector('.close');
    const nextButton = document.querySelector('.nxt-btn');
    const prevButton = document.querySelector('.prev-btn');

    let currentImageIndex ;

        galleryImages.forEach( (image, index) => {
            image.addEventListener('click', () => {
                modal.style.display = "block";
                modalImage.src = image.src;
                currentImageIndex = index;
            });
        });

        closeButton.addEventListener('click', () => {
            modal.style.display="none";
        })

       function NextImage(){
            currentImageIndex++;

            if(currentImageIndex >= galleryImages.length){
                currentImageIndex = 0;
            }

            modalImage.src = galleryImages[currentImageIndex].src;
            console.log(currentImageIndex);
       } 

       function prevImage(){
            currentImageIndex--;

            if(currentImageIndex < 0){
                currentImageIndex = galleryImages.length - 1;
            }

            modalImage.src = galleryImages[currentImageIndex].src;
            console.log(currentImageIndex)
        } 

        nextButton.addEventListener('click', NextImage);
        prevButton.addEventListener('click', prevImage);

        document.addEventListener('keydown', (event) => {
            if(modal.style.display === 'block'){
                if(event.key === 'ArrowRight'){
                    NextImage();
                }else if(event.key === 'ArrowLeft'){
                    prevImage();
                }else if(event.key === 'Escape'){
                    modal.style.display = 'none';
                }
            }
        });

});