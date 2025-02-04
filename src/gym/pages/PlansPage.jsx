import React from 'react'
import { PlansList } from '../components/PlansList'

export const PlansPage = () => {
  return (
    <div className="plans">
      <h1 className="title animate__animated animate__backInDown">planes individuales </h1>
      <div>
        <h1>Plan Normal</h1>
        <PlansList type={'normal'}/>
        <h1>Plan Estudiante</h1>
        <PlansList type={'estudiante'}/>
      </div>
    </div>
  )
}
