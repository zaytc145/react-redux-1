export default (word='', action) =>{
    switch (action.type){
        case 'TAKE_WORD':
            return action.payload;
        case 'CLEAR_ALL':
            return ''
        default:
            return word
    }
};