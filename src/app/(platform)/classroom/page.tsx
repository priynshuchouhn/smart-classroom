import { getDashboardModules } from '@/actions/get-courses';
import { ModulesList } from '@/components/ui/modules-list';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

async function Page() {
  // const { userId } = { userId: "Hello world" };
  // const modules = await getDashboardModules({
  //   userId,
  // });
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchModules = async () => {
    try {
      const response = await axios.get("/api/modules", {
        params: {
          userId: "Hello world",
        },
      });

      setModules(response.data);
    } catch (err: any) {
      console.error("[FETCH ERROR]", err);
      setError(err.response?.data?.error || "An error occurred while fetching modules.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <>
      <div className="p-6 space-y-4">
        {loading && (<p>We're fetching modules....</p>)}
        {error && (<p>{error}</p>)}
        {!loading && !error && <ModulesList items={modules} />}
      </div>
    </>
  );
}

export default Page
