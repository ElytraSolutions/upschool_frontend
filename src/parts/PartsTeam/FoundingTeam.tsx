import resolveImgURL from '../../utlis/resolveImgURL';

const FoundingTeam = () => {
    return (
        <div className="w-[100%] min-h-[100vh] flex md:flex-row flex-col bg-[#f4f4f4]">
            <div className=" w-full md:w-1/2 flex justify-center items-center ">
                <img
                    className="w-[90%]"
                    src={resolveImgURL('images/Team/founders.png')}
                    alt="founders"
                />
            </div>
            <div className="w-full md:w-1/2 pl-4 flex flex-col justify-center gap-4 ">
                <h1 className="mt-2 text-4xl font-bold text-[#242254]">
                    Upschool.co Founding Team
                </h1>
                <h3 className=" font-thin text-[#242254] md:text-left text-justify leading-8 tracking-wide w-[90%] space-y-4">
                    <p>
                        It became clear very quickly that these 3 Australian
                        teachers – Gavin McCormack, Richard Mills & Jake Davies
                        – were on similar life journeys.
                    </p>
                    <p>
                        Gavin was the principal of Farmhouse Montessori School
                        in the Northern Beaches of Sydney, Richard (a teacher)
                        was running a unique digital agency that serviced the
                        education sector called Digital Schools, and Jake (a
                        teacher) was working at executive level in the corporate
                        sustainability sector.
                    </p>
                    <p>
                        All were on a mission though – and it was to create
                        meaningful and lasting change in the world. To shape the
                        hearts, minds, and spirits of students, teachers, and
                        families, and more broadly speaking, humanity.
                    </p>
                    <p>
                        When the vision was born on how to scale this shared
                        mission, it made perfect sense to team up and get to
                        work on building Upschool.
                    </p>
                </h3>
            </div>
        </div>
    );
};

export default FoundingTeam;
