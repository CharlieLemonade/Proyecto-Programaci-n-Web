document.addEventListener("DOMContentLoaded", function () {
    
const imageUrls = [
    "Images/6.jpg",  // Ruta de la primera imagen
    "Images/8.jpeg",  // Ruta de la segunda imagen
    "Images/img_box.jpeg", // Ruta de la tercera imagen
    // Agrega más rutas de imágenes si es necesario
  ];
  
  const imgBox = document.getElementById("Rotating-image");
  
  let currentIndex = 0;
  
  function changeImage() {
    imgBox.src = imageUrls[currentIndex];
    imgBox.alt = `Image ${currentIndex + 1}`;
  
    currentIndex = (currentIndex + 1) % imageUrls.length;
    setTimeout(changeImage, 5000); // Cambia cada 5 segundos
  }
  
  changeImage();
  });
