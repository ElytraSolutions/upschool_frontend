import { LargeScreenRightCornerBarAfterLogin as AfterLoginLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBarAfterLogin';
import { LargeScreenRightCornerBarBeforeLogin as BeforeLoginLS } from '../../parts/PartsNavbar/LargeScreenRightCornerBarBeforeLogin';

type LogInProps = {
    isLoggedIn: boolean;
};
const LargeScreenRightCornerBar = ({ isLoggedIn }: LogInProps) => {
    return <>{isLoggedIn ? <AfterLoginLS /> : <BeforeLoginLS />}</>;
};

export { LargeScreenRightCornerBar };
