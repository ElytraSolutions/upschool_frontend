import MainSection from '../../parts/PartsTeam/MainSection';
import FoundingTeam from '../../parts/PartsTeam/FoundingTeam';
import Members from '../../parts/PartsTeam/Members';
import { useEffect } from 'react';
const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <MainSection />
            <FoundingTeam />
            <Members />
        </div>
    );
};

export default Team;
