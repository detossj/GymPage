import { useMemo } from 'react'
import { getPlansByName } from '../helpers/getPlansByName'
import { PlansCard } from './PlansCard'

export const PlansList = ({type}) => {

  const plans = useMemo( () => getPlansByName( type ),[ type ])

  return (
    <div className="grid">
      {
        plans.map( plan => (
          <PlansCard key={ plan.name + plan.id } { ...plan }/>
        ))
      }

    </div>
  )
}
