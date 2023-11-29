import { useEffect } from 'react';
import BulkEnrolSection from '../../parts/PartsBulkRegistration/BulkEnrolSection';
import BulkExpect from '../../parts/PartsBulkRegistration/BulkExpect';
import BulkImageSection from '../../parts/PartsBulkRegistration/BulkImageSection';

function BulkRegistrationPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Bulk Enrolment | Upschool';
    }, []);
    return (
        <>
            <div className="grid grid-cols-8 md:gap-y-10 gap-y-6 mb-[20px]">
                <div className="row-span-full col-span-full">
                    <BulkImageSection />
                </div>
                <div className="md:col-span-6 md:col-start-2 col-span-full md:p-0 p-4 grid gap-4">
                    <BulkEnrolSection />
                    <BulkExpect />
                </div>
            </div>
        </>
    );
}

export default BulkRegistrationPage;
