import { BookList } from '../../data/BookBundleList';
export default function BookBundleTable() {
    return (
        <>
            <table className=" border-collapse text-xs text-left w-full h-full  ">
                <thead>
                    <tr>
                        <th className="border border-b-4 border-white md:px-0.5 lg:p-2 ">
                            Book Name
                        </th>
                        <th className="border border-b-4 border-white md:px-0.5 lg:p-2 ">
                            Value Explored
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {BookList.map((book, index) => (
                        <tr
                            key={index}
                            className=" last:border-b border-white font-light "
                        >
                            <td className="border-x  border-white md:p-0.5 lg:px-2">
                                {index + 1}. {book.name}
                            </td>
                            <td className="border-x  border-white md:p-0.5 lg:px-2">
                                {book.category}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
