import React from "react";
import bahir_dar_picture1 from "../static/media/Bahir-dar-1.jpg";
import bahir_dar_picture2 from "../static/media/Bahir-dar-2.jpg";
import bahir_dar_picture3 from "../static/media/Bahir-dar-3.jpg";
import bahir_dar_picture4 from "../static/media/Bahir-dar-4.jpg";
import bahir_dar_picture5 from "../static/media/Bahir-dar-5.jpg";
import bahir_dar_picture6 from "../static/media/Bahir-dar-6.jpg";
import bahir_dar_picture7 from "../static/media/Bahir-dar-7.jpg";
import bahir_dar_picture8 from "../static/media/Bahir-dar-8.jpg";
import bahir_dar_picture9 from "../static/media/Bahir-dar-9.jpg";
import bahir_dar_picture10 from "../static/media/Bahir-dar-10.jpg";
import bahir_dar_picture11 from "../static/media/Bahir-dar-11.jpg";
import Gallery from "react-photo-gallery";
import '../styles/home.css'

const photos = [
    { src: bahir_dar_picture5, width: 6, height: 2 }, // Adjust width/height as needed
    { src: bahir_dar_picture1, width: 5, height: 3 }, // Assuming bahir_dar_picture4 is the intended picture
    { src: bahir_dar_picture3, width: 4, height: 3 },
    { src: bahir_dar_picture4, width: 6, height: 3 },
    { src: bahir_dar_picture7, width: 2, height: 3 },
    { src: bahir_dar_picture8, width: 4, height: 3 },
    { src: bahir_dar_picture9, width: 3, height: 3 },
    { src: bahir_dar_picture10, width: 4, height: 3 },
    { src: bahir_dar_picture11, width: 3, height: 3 },
];

const Pictures = () => {
  return <Gallery photos={photos} columns={4} rows={3} className="gallery-container" />;
};

export default Pictures;
