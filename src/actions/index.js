import YandexTranslate from '../apis/YandexTranslate';
import YandexDictionary from'../apis/YandexDictionary';

export const translationCall = (txt) => async (dispatch,getState) => {
    if(txt){
            const response = await YandexTranslate.get('/translate',{
            params:{
                text:txt,
                lang:'ru',
                key:'trnsl.1.1.20190819T131628Z.f4ac07ba1068e00e.527bd5f37b735835d2bf9edd02e609de93b2906d'
            }
        });
        dispatch({type:'TRANSLATION_CALL',payload:{textResponse:response.data.text[0],mainWord:getState().word}})
    }
}

export const takeWord = (e) => {
    return{
        type:'TAKE_WORD',
        payload:e.target.value
    }
}

export const dictionaryCall = (txt) => async (dispatch)=>{
    if(txt){
        const response = await YandexDictionary.get('/lookup',{
            params:{
                key:'dict.1.1.20190820T125653Z.3fae84f90039f1b0.30a10f2df429df1ae8eeadcc3ea4e67600074516',
                lang:'en-ru',
                text:txt
            }
        });
        dispatch({type:'DICTIONARY_CALL',payload:response.data.def})
    }
};

export const clearAll = () => {
    return {type:'CLEAR_ALL'}
}

export const showHistoryWord = (e) => async (dispatch)=> {
   const response = await dispatch(dictionaryCall(e.target.innerHTML.split('-')[0]))
   return({type:'SHOW_HiSTORY_WORD',payload:response})
}