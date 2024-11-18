document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // List of images hosted locally on your GitHub repository
    const localImages = [
        'images/peakpx.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    // List of external image URLs
    let externalImages = [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/300'
    ];

    // Function to load images into the gallery
    function loadImages(images, isExternal = false) {
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = isExternal ? image : `images/${image}`;
            imgElement.alt = "Curvy Wallpaper";
            gallery.appendChild(imgElement);
        });
    }

    // Load both local and external images
    loadImages(localImages);
    loadImages(externalImages, true);
});

// Function to add a new external image from user input
function addExternalImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        const gallery = document.getElementById('gallery');
        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        imgElement.alt = "User Added Wallpaper";
        gallery.appendChild(imgElement);
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Please enter a valid image URL.');
    }
}
