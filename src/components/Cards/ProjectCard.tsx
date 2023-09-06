import { NavLink } from 'react-router-dom';
import upschoollogo from '../../assets/upschool_logo.png';
export const Card = () => {
    return (
        <div className=" rounded-lg text-theme-color text-sm lg:text-base flex flex-col gap-1 overflow-hidden bg-slate-200">
            <div className="bg-yellow-600 max-h-[35%] overflow-hidden">
                <img src={upschoollogo} alt="logo" className="w-full h-fit" />
            </div>
            <div className="inline text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. uam
                voluptatibus, aspernatur officiis sed, labore eius nihil.
            </div>
            <div className="block text-center">
                Jane Goodall Institute Australia
            </div>
            <button className="px-2 py-3 bg-red-upschool text-white self-center m-4 w-10/12">
                <NavLink to="/courses">Continue with this project</NavLink>
            </button>
        </div>
    );
};
export const ProjectCard = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};
