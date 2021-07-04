import { firestore } from "../../firebase";

const LOAD = "dict/LOAD";
const CREATE = "dict/CREATE";
const EDIT = "dict/EDIT";

const initialState = {
    list: []
}
// { word : "hi", desc: "when you see someone", exmp: "hi everyone" }

const dict_db = firestore.collection("dictionary");

export const loadDictFB = () => {
    return function (dispatch) {
        dict_db.get().then((docs) => {
            let dict_data = [];
            docs.forEach((doc)=> {
                if(doc.exists){
                    dict_data = [ ...dict_data , {id: doc.id, ...doc.data()} ];
                }
            });
            console.log(dict_data,"loadDictFB");
            dispatch(loadDicts(dict_data));
        })
    }
}

export const addDictFB = (dict) => {
    return function (dispatch) {
        let dict_data = { word:dict.word, desc:dict.desc, exmp:dict.exmp };
        dict_db.add(dict).then((docRef)=>{
            console.log(dict,"addDictFB");
            dict_data = { ...dict_data, id: docRef.id }
            dispatch(createDict(dict_data))})
        .catch((err)=>{
            console.log(err);
            window.alert("This is error");
        })

    }
}

export const editDictFB = (dict) => {
    return function (dispatch) {
        if (!dict) return;
        console.log(dict);
        
        dict_db.doc(dict.id).update(dict)
        .then(() => dispatch(editDict(dict)))
        .catch((err)=>{
            console.log(err);
            window.alert("This is error");
        });
    }
}


export const loadDicts = (dict) => {
    return { type: LOAD, dict };
}
export const createDict = (dict) => {
    return { type: CREATE, dict }
}
export const editDict = (dict) => {
    return { type: EDIT, dict }
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "dict/LOAD": {
            if (action.dict.length > 0){
                console.log(action.dict,"state 리듀서 로드 확인");
                return { list: action.dict }
            }
            return state;
        }
        case "dict/CREATE":
            const new_dict_list = [ action.dict, ...state.list ]; //새로 추가하는 단어가 맨 위에 오도록 단어 리스트 순서 변경...!😙 로컬에서 추가하는 단어에 한함. 서버 DB에서 가져오는 순서는 idx 작업 필요😉
            console.log(state,"state 리듀서 크리에이트")
            return { list: new_dict_list };
        case "dict/EDIT":
            let dict_list = state.list.filter( item => item.id !== action.dict.id );
            console.log(action.dict, dict_list);
            return { list: [ action.dict, ...dict_list ] };

        default:
            return state;
    }
}