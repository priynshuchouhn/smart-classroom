import { redirect } from 'next/navigation';

import { getAnalytics } from '@/actions/get-analytics';
import { DataCard } from './_components/data-card';
import { Chart } from './_components/chart';

const AnalyticsPage = async () => {

    const { user_id } = {user_id: "Hello world"}
    if (!user_id) {
        return redirect('/');
    }

    const {
        data,
    } = await getAnalytics(user_id);

    return (
        <div className='p-6'>
            <div className='grid grid-cols-1 gap-4 mb-4 md:grid-cols-2'>
            </div>
            <Chart data={data} />
        </div>
    )
}

export default AnalyticsPage;