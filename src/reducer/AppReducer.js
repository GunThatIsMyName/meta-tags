export const fetchStart = "FetchStart";
export const fetchLoading = "FetchLoading";
export const fetchError = "FetchError";
export const fetchFinish = "FetchFinish";

export const errorDisappear ="errorDisappear";


export const initState = {
    data:[],
    loading:false,
    error:false,
}

export const appReducer=(state,action)=>{

    switch (action.type) {

        case fetchStart:
            return{...state,data:[],loading:true,error:false}

        case fetchLoading:
            return{...state,data:action.payload}

        case fetchError:
            return{...state,error:true}

        case fetchFinish:
            return{...state,loading:false}

        default:
            return console.log("ERROR@@@");
    }
}