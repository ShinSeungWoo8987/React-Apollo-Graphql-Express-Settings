const dataReducer = (data, {type, payload})=>{
    switch (type) {
      case 'ADD_DATA':
        return payload;
      case 'ERROR':
        return payload;
      default:
        throw new Error();
    }
}
export default dataReducer;