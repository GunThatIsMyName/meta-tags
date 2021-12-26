import mySite from "../image/mysite.png";

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

export const AS_fetchStart = "FetchStart";
export const AS_fetchLoading = "FetchLoading";
export const AS_fetchError = "FetchError";
export const AS_fetchFinish = "FetchFinish";
export const AS_editPreview ="EditPreview";