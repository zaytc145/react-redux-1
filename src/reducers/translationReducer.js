export default (translation='', action) =>{
    switch (action.type){
        case 'TRANSLATION_CALL':
            return action.payload.textResponse
        case 'CLEAR_ALL':
            return ''
        default:
            return translation
        }
};