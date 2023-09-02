import { data, navData } from '../../data/NavbarBoxData';
import { NavLink } from 'react-router-dom';
import { NavbarBox as Box } from './NavbarBox';

const LargeScreenMenuBar = () => {
    return (
        <div className="flex justify-start gap-2 md:gap-3 lg:gap-4  xl:gap-5 2xl:gap-8 items-center z-10">
            {data.map((inf) => (
                <Box key={inf.id} inf={inf} />
            ))}
            <span className="pr-1 block w-32 max-w-fit">
                <NavLink
                    to={navData.path ? navData.path : '#'}
                    className="text-white text-sm"
                >
                    {navData.title}
                </NavLink>
            </span>
        </div>
    );
};

export { LargeScreenMenuBar as ComputerMenu };
