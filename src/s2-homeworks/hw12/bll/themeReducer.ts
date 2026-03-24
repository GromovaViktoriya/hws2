const initState = {
    themeId: 1,
}
const SET_THEME_ID = 'SET_THEME_ID' as const
export type StateType = typeof initState

export const themeReducer = (state = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

type ActionType = {
    type: typeof SET_THEME_ID
    id: number
}

export const changeThemeId = (id: number): ActionType => ({type: 'SET_THEME_ID' as const, id}) // fix any
