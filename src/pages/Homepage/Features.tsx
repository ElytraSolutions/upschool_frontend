import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

function features() {
    return (
        <div className="bg-[#f4f4f4] text-[#757783] ">
            <div className="m-auto grid max-w-6xl text-[#242254] md:grid-cols-2 lg:grid-cols-3">
                <div className="p-10 ">
                    <i className="fa fa-globe fa-3x"></i>
                    <h1 className="text-2xl font-bold">
                        Change Making Communities
                    </h1>
                    <p className="font-light">
                        Our 'why' is to create a kinder and more compassionate
                        world. This underpins what we teach.
                    </p>
                </div>
                <div className="p-10 ">
                    <i className="fa fa-cart-arrow-down fa-3x"></i>
                    <h1 className="text-2xl font-bold">
                        Real-World Learning Opportunities
                    </h1>
                    <p className="font-light">
                        We take 'real-world' to the next level by designing
                        projects with 'real' outcomes.
                    </p>
                </div>
                <div className="p-10 ">
                    <LightbulbOutlinedIcon style={{ fontSize: '64px' }} />
                    <i className="fa fa-lightbulb fa-3x"></i>
                    <h1 className="text-2xl font-bold">
                        Entrepreneurship With Purpose
                    </h1>
                    <p className="font-light">
                        We want to teach the entrepreneurs of tomorrow to
                        operate with purpose and ethics.
                    </p>
                </div>
                <div className="p-10 ">
                    <i className="fa fa-bolt fa-3x"></i>
                    <h1 className="text-2xl font-bold">
                        Inspiring Creativity & Problem Solving
                    </h1>
                    <p className="font-light">
                        We inspire creative thinking and dynamic problem
                        solving. These are the skills for tomorrow.
                    </p>
                </div>
                <div className="p-10 ">
                    <i className="fa fa-rocket fa-3x"></i>
                    <h1 className="text-2xl font-bold">Skill Based Learning</h1>
                    <p className="font-light">
                        From graphic design & film making through to creative
                        writing and storytelling (and everything in between)
                    </p>
                </div>
                <div className="p-10 ">
                    <i className="fa fa-cubes fa-3x"></i>
                    <h1 className="text-2xl font-bold">
                        Team Players & Collaborators
                    </h1>
                    <p className="font-light">
                        Our projects bring children, teachers and communities
                        together to work towards a common goal.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default features;
