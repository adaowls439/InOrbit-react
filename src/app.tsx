import { useEffect, useState } from 'react'
import { Dialog } from './assets/components/ui/dialog'
import { CreateGoal } from './assets/components/create-goal'

import { EmptyGoals } from './assets/components/empty-goals'
import { Summary } from './assets/components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 segundos
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary /> : <EmptyGoals />}
      {/*<EmptyGoals /> */}
      {/*<Summary />*/}
      <CreateGoal />
    </Dialog>
  )
}
