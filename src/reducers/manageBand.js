export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      // console.log({ bands: [...state.bands, action.payload.name] });
      return { bands: [...state.bands, action.payload] };
    default:
      return state
  }
};
