import FileIcon from '../../assets/FileIcon.png';

type ISidebarProps = {
    section: {
        title: string;
        subtitle: string[];
    };
};

export default function Sidebar({ section }: ISidebarProps) {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between bg-blue-950 text-white py-5 px-4">
                <span>{section.title}</span>
                <span>3/10</span> {/*TODO Logic Required */}
            </div>
            <ul className=" divide-y divide-slate-400 border-b mb-7 border-slate-400 bg-slate-200">
                {section.subtitle.map((title, index) => (
                    <li
                        key={index}
                        className="flex  justify-between items-center py-2 bg-slate-200 gap-7 w-full text-sm px-2"
                    >
                        <div className="flex flex-row gap-1 lg:gap-2  2xl:gap-3 items-center justify-start p-2  ">
                            <span className="h-8 w-8 rounded-full bg-blue-950 flex justify-center items-center">
                                <img
                                    src={FileIcon}
                                    alt="file"
                                    height="20"
                                    width="20"
                                    className="relative"
                                />
                            </span>
                            <span>{title}</span>
                        </div>
                        <div className="bg-red-600 h-5 w-5 rounded-full "></div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
