export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_GLOBAL_VALUE":
      return state.map((el) =>
        action.payload[el.type] ? { ...el, cases: action.payload[el.type] } : el
      );
      case "UPDATE_COUNTRIES": 
        return state.map((el,i) => i === action.payload.idx ? {...el,countries: action.payload.data} : el);

    default:
      return state;
  }
};
