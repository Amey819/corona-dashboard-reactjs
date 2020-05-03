const initialState = {
  data: [],
  post: null,
  loading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "DATA_LOAD":
      return {
        ...state,
        data: payload,
        loading: false,
      };
    default:
      return state;
  }
}
