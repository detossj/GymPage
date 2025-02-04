import { plans } from '../data/plans'

export const getPlansByName = ( type ) => {

    const validPlans = ['normal','estudiante']

    if( !validPlans.includes( type ) ){
        throw new Error(`${ type } is not valid type`)
    }

    return plans.filter( plan => plan.id === type );
  
}
