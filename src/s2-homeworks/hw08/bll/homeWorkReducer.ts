import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let stateCopy = [...state]
            if (action.payload === 'up') stateCopy.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name))
            if (action.payload === 'down') stateCopy.sort((a: UserType, b: UserType) => a.name.localeCompare(b.name)).reverse()
            // sort() создаёт новый массив? или нужно в ручную?...
            // need to fix
            return stateCopy
        }
        case 'check': {
            // filter() создаёт новый массив? или нужно в ручную?...
          return state.filter((user: UserType) => user.age >= action.payload)
        }
        default:
            return state
    }
}
