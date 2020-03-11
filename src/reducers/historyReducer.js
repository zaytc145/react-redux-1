export default (historyArr=[], action) =>{
    switch (action.type){
        case 'CLEAR_ALL':
            return []
        case 'TRANSLATION_CALL':
            return  [...historyArr, [action.payload.mainWord,action.payload.textResponse]]
        default:
            return historyArr
    }
};