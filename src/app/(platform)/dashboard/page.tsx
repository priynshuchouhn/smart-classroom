import React from 'react'
import { BannerCard } from './_components/banner-card'
import { InfoCard } from './_components/info-card'
import { CheckCircle, Clock, InfoIcon } from 'lucide-react'

function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <BannerCard
          icon={InfoIcon}
          label="Welcome to the Smart Classroom"
          description={`This is where you can see your progress 
            and continue your courses.`}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In Progress"
          numberOfItems={0}
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={0}
          variant="success"
        />
      </div>

    </div>
  )
}

export default Dashboard
