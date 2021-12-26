import {
  AS_editPreview,
  AS_fetchError,
  AS_fetchFinish,
  AS_fetchLoading,
  AS_fetchStart,
} from "./AppState";

export const appReducer = (state, action) => {
  switch (action.type) {
    case AS_fetchStart:
      return { ...state, data: [], loading: true, error: false };

    case AS_fetchLoading:
      const { meta_tags, title, domain } = action.payload;
      let newData = {
        title,
        domain,
        description: "",
        image: "",
      };

      // manipulate fetched data

      meta_tags.map((item) => {
        if (item.name === "description") {
          newData.description = item.content;
          return item;
        }
        if (item.property === "og:description") {
          newData.description = item.content;
          return item;
        }
        if (item.property === "og:image") {
          newData.image = item.content;
          return item;
        }
        return item;
      });

      return { ...state, data: newData };

    case AS_fetchError:
      return { ...state, error: true };

    case AS_fetchFinish:
      return { ...state, loading: false };

    case AS_editPreview:
      const { name, value } = action.payload;
      return { ...state, data: { ...state.data, [name]: value } };
    default:
      return console.log("ERROR@@@");
  }
};
