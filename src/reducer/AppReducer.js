import mySite from "../image/mysite.png";


export const fetchStart = "FetchStart";
export const fetchLoading = "FetchLoading";
export const fetchError = "FetchError";
export const fetchFinish = "FetchFinish";

export const errorDisappear ="errorDisappear";
export const editPreview ="EditPreview";


export const initState = {
    data:{
        title:"junhyun's journey ",
        description:"할 수 있다는 믿음을 가지면 처음에는 그런 능력이 없을지라도 결국에는 할 수 있는 능력을 확실히 갖게 된다. ",
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