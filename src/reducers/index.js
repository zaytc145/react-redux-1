import { combineReducers } from "redux";
import wordReducer from "./wordReducer";
import historyReducer from "./historyReducer";
import wordDescriptionReducer from "./wordDescriptionReducer";
import translationReducer from "./translationReducer";

export default combineReducers({
    word:wordReducer,
    translation:translationReducer,
    historyArr:historyReducer,
    wordDescription:wordDescriptionReducer
})