//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export default function setReducer(state = initialState, action: Action): ExampleInitInter {
//     switch (action.type) {
//         case Example: {
//             return {
//                 ...state,
//                 example: action.payload
//             };
//         }
//         default:
//             return state;
//     }
// }

import * as FormatData from "../interfaceFormat";
import {
    initialState, Action, CurrentCache, SET_USER,
    SET_TODAY_NUTRI,
    SET_GOAL_NUTRI,

} from "./index";

export default function setReducer(state = initialState, action: Action): CurrentCache {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload as FormatData.UserFormat
            };
        }
        case SET_TODAY_NUTRI: {
            return {
                ...state,
                todayNutri: action.payload as FormatData.NutriFormat
            };
        }
        case SET_GOAL_NUTRI: {
            return {
                ...state,
                goalNutri: action.payload as FormatData.NutriFormat
            };
        }
        default:
            return state;
    }
}