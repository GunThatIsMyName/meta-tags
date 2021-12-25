import mySite from "../image/mysite.png";


export const fetchStart = "FetchStart";
export const fetchLoading = "FetchLoading";
export const fetchError = "FetchError";
export const fetchFinish = "FetchFinish";

export const errorDisappear ="errorDisappear";
export const editPreview ="EditPreview";


export const initState = {
    data:{
        title:"Junhyun's Imagine",
        description:"실패는 성장을 위한 배경지식이다. 한번더 부딫혀라 ",
        domain:"junsjourney.site",
        image:mySite,
    },
    loading:false,
    error:false,
}

export const appReducer=(state,action)=>{

    switch (action.type) {

        case fetchStart:
            return{...state,data:[],loading:true,error:false}

        case fetchLoading:
            const {meta_tags,title,domain}=action.payload;
            let newData = {
                title,
                domain,
                description:"",
                image:"",
            }

            // manipulate fetched data 
            meta_tags.map(item=>{
                if(item.name === "description"){
                    newData.description = item.content;
                    return item;
                }
                if(item.property==="og:description"){
                    newData.description = item.content;
                    return item;
                }
                if(item.property==="og:image"){
                    newData.image = item.content;
                    return item;
                }
            })
            return{...state,data:newData}

        case fetchError:
            return{...state,error:true}

        case fetchFinish:
            return{...state,loading:false}

        case editPreview:
            const {name,value}=action.payload;
        return{...state,data:{...state.data,[name]:value}}
        default:
            return console.log("ERROR@@@");
    }
}