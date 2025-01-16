import { ModulesList } from '@/components/ui/modules-list';
import axios from 'axios';

async function Page() {
  // const { userId } = { userId: "Hello world" };
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/modules`, {
    params: {
      userId: "Hello world",
    },
  });
  const modules = response.data
  return (
    <>
      <div className="p-6 space-y-4">
        <ModulesList items={modules} />
      </div>
    </>
  );
}

export default Page
