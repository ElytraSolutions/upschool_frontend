type ProgressBarProps = {
    completedLessons: number;
    totalLessons: number;
};
export const ProgressBar: React.FC<ProgressBarProps> = ({
    completedLessons,
    totalLessons,
}) => {
    // TODO implement better logic if possible
    const widthCalculate = () => {
        const calculate = Math.floor((completedLessons / totalLessons) * 100);
        if (calculate === 0) return 'w-0';
        else if (calculate < 10) return 'w-[5%]';
        else if (calculate < 20) return 'w-[12%]';
        else if (calculate < 30) return 'w-[22%]';
        else if (calculate < 40) return 'w-[32%]';
        else if (calculate < 50) return 'w-[42%]';
        else if (calculate < 60) return 'w-[52%]';
        else if (calculate < 70) return 'w-[62%]';
        else if (calculate < 80) return 'w-[72%]';
        else if (calculate < 90) return 'w-[82%]';
        else if (calculate < 100) return 'w-[92%]';
        else if (calculate === 100) return 'w-[100%]';
        else return 'w-0';
    };
    const width = widthCalculate();
    return (
        <div className="bg-slate-400 rounded-lg  h-1 lg:h-[5px] xl:h-2 w-full">
            <div className={`bg-theme-color h-full rounded-lg ${width}`}></div>
        </div>
    );
};
