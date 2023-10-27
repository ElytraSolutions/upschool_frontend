import { useEffect, useState } from 'react';

const CertificateImage = ({ formData }) => {
    const [image, setImage] = useState();

    const createNewImage = async () => {
        // Get the original image file
        const originalImage = await fetch(
            '../../../public/images/Certificate.png',
        );
        // Resize the image

        console.log('True', originalImage);
        // Resize the image
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 669; // new width
        canvas.height = 939.3; // new height
        const img = new Image();
        img.src = originalImage.url;
        img.onload = () => {
            context.drawImage(img, 0, 0, 669, 939.9); // Draw the resized image

            console.log('Called');

            // Draw text on the canvas
            const text = `${formData.firstName} ${formData.lastName}`;
            context.font = '3.2rem "Great Vibes"';
            context.fillStyle = '#03014C';

            const textWidth = context.measureText(text).width;
            const x = (canvas.width - textWidth) / 2;
            const y = (canvas.height - 24) / 2 + 24;

            context.fillText(text, x, y); // Adjust position and text as needed

            // Convert the canvas to a data URL
            const modifiedImageDataUrl = canvas.toDataURL('image/png');

            // Save the data URL in React state
            setImage(modifiedImageDataUrl);
        };
    };

    useEffect(() => {
        createNewImage();
    }, [formData]);

    return (
        <div>
            <img src={image} className="p-5" />
            {/* <div className="absolute bottom-[17%] left-[10%] right-[10%] text-lg font-bold h-[6rem]  bg-white z-1"></div>
            <span className="absolute bottom-[17%] left-1/2 transform -translate-x-1/2 text-lg font-bold h-[5rem] w-[80%] z-10 ">
                <h1 className="text-5xl font-greatvibes text-font-color font-normal text-center">
                    {formData.firstName} {formData.lastName}
                    Kaustuv Karki Karki
                </h1>
            </span> */}
        </div>
    );
};

export default CertificateImage;
