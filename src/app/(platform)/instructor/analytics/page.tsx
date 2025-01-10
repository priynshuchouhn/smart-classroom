import { redirect } from 'next/navigation';

import { DataCard } from './_components/data-card';
import { Chart } from './_components/chart';

const AnalyticsPage = async () => {

    const { user_id } = {user_id: "Hello world"}
    if (!user_id) {
        return redirect('/');
    }


    return (
        <div className='p-6'>
            coming soon...
        </div>
    )
}

export default AnalyticsPage;