//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { NutriFormat, UserFormat } from "../interfaceFormat";

// export const EXAMPLE = `EXAMPLE`;
// export const examplefnc = (item: any) => {
//     return {
//         type: EXAMPLE,
//         payload: item
//     }
// }

export const SET_USER = `SET_USER`;
export const currentSetUser = (user: UserFormat) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const SET_TODAY_NUTRI = `SET_TODAY_NUTRI`;
export const currentSetTodayNutri = (nutri: NutriFormat) => {
    return {
        type: SET_TODAY_NUTRI,
        payload: nutri
    }
}

export const SET_GOAL_NUTRI = `SET_GOAL_NUTRI`;
export const currentSetGoalNutri = (nutri: NutriFormat) => {
    return {
        type: SET_GOAL_NUTRI,
        payload: nutri
    }
}
