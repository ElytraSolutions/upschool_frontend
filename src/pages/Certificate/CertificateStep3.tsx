import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Certificate from '../../../public/images/Certificate.png';
import Cross from '../../assets/CrossMark.png'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

const CertificateStep3 = ({formData, setFormData}) => {
    const handleDownload = () => {
        const certificate = document.querySelector('.document') as HTMLElement;
        html2canvas(certificate).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            doc.save('certificate.pdf');
        });
    };

    const [showModal, setShowModal] = useState(false)

    const handleEdit= () => {
        setShowModal(true)
    }

    const [tempData, setTempData] = useState({
        firstName : "",
        lastName: ""
}) 


    const handleChange = (e) => {
        setTempData({
            ...tempData,
            [e.target.name] : e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            firstName : tempData.firstName,
            lastName : tempData.lastName
        })
        setTempData({
            firstName: "",
            lastName: ""
        });
        setShowModal(false)
    }


    return (
        <div className=" relative overflow-scroll h-50vh max-h-[76vh] overflow-x-hidden">
            <div className="document">
                <img src={Certificate} className="p-5" />
                <div className="absolute bottom-[18%] left-[10%] right-[10%] text-lg font-bold h-[6rem]  bg-white z-1 "></div>
                <span className="absolute bottom-[18%] left-1/2 transform -translate-x-1/2 text-lg font-bold h-[5rem] w- z-10 ">
                    <h1 className="text-2xl">{formData.firstName} {formData.lastName}</h1>
                </span>
            </div>
            <div className="flex justify-between p-5">
                <button className="bg-theme-color text-white px-7 py-2 font-bold" onClick={handleEdit}>
                    Edit Details
                </button>
                <button className="bg-theme-color text-white px-7 py-2 font-bold">
                    Email PDF
                </button>
                <button
                    className="bg-theme-color text-white px-7 py-2 font-bold"
                    onClick={handleDownload}
                >
                    Download PDF
                </button>
            </div>
                  {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">

                  <h3 className="text-2xl font-semibold">
                    Change Your Name
                  </h3>
                    <div className="mt-2 ml-20">
                       <button onClick={() => setShowModal(false)}>
                            <img src={Cross} />
                        </button>
                    </div>
                </div>
                {/*body*/}
                <form onSubmit={handleSubmit}>
                <div className="relative p-6">
                    <TextField
                    className='w-full mb-4'
                    type="text"
                    label="First Name"
                    onChange={handleChange}
                    value={tempData.firstName}
                    name="firstName"
                    />
                    <h1 className='mt-3 md:mt-5 lg:mt-8'></h1>
                    <TextField
                        className='w-full'
                        type="text"
                        label="Last Name"
                        onChange={handleChange}
                        value={tempData.lastName}
                        name="lastName"
                        />
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className=" text-white bg-theme-color font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                    >
                    Save Changes
                  </button>
                </div>
                      </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
        </div>
    );
};

export default CertificateStep3;
