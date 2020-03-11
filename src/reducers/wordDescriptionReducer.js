export default (wordDescription=[], action) =>{
    switch (action.type){
        case 'DICTIONARY_CALL':
            return action.payload
        case 'CLEAR_ALL':
            return []
        case 'SHOW_HiSTORY_WORD':
            return action.payload
        default:
            return wordDescription
    }
};