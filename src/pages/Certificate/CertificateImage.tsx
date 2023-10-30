import { useState } from 'react';
import resolveImgURL from '../../utlis/resolveImgURL';

const CertificateImage = ({ formData }) => {
    const [image, setImage] = useState('');

    const createNewImage = async () => {
        // Get the original image file
        // const originalImage = await fetch(
        //     '../../../public/images/Certificate_main.png',
        // );

        // const originalImage = resolveImgURL('/Certificate_main.png');
        // console.log(originalImage);
        // Resize the image
        // console.log(formData.course);

        // console.log('True', originalImage);
        // Resize the image
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        console.log(context);
        canvas.width = 669; // new width
        canvas.height = 939.3; // new height
        const img = new Image();
        img.src = resolveImgURL('/Certificate_main.png');
        console.log(
            'This is the URL',
            resolveImgURL('/images/Certificate_main.png'),
        );
        if (context) {
            img.onload = () => {
                context.drawImage(img, 0, 0, 669, 939.9); // Draw the resized image

                console.log('Called');

                setTimeout(() => {
                    context.font = '3.2rem "Great Vibes"';
                    context.fillStyle = '#03014C';
                    const text = `${formData.firstName} ${formData.lastName}`;

                    const textWidth = context.measureText(text).width;
                    const x = (canvas.width - textWidth) / 2;
                    const y = (canvas.height - 24) / 2 + 24;

                    context.fillText(text, x, y); // Adjust position and text as needed

                    context.font = '600 0.85rem "Nunito Sans"';
                    context.fillStyle = '#02013c';
                    const courseText = `'${formData.course}' course.`;
                    const coursetextWidth =
                        context.measureText(courseText).width;
                    const course_x = (canvas.width - coursetextWidth) / 2;
                    const course_y = canvas.height - 370;
                    context.fillText(courseText, course_x, course_y);

                    // Convert the canvas to a data URL
                    const modifiedImageDataUrl = canvas.toDataURL('image/png');

                    // Save the data URL in React state
                    setImage(modifiedImageDataUrl);
                }, 800);

                // Draw text on the canvas
            };
        }
    };

    createNewImage();

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
