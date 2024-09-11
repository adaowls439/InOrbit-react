import { Dialog } from './assets/components/ui/dialog'
import { CreateGoal } from './assets/components/create-goal'
//import { EmptyGoals } from './assets/components/empty-goals'
import { Summary } from './assets/components/summary'

export function App() {
  return (
    <Dialog>
      {/*<EmptyGoals /> */}
      <Summary />
      <CreateGoal />
    </Dialog>
  )
}
