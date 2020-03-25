export default function list(state={
    data: [],
    loading: true
}, action) {
    switch (action.type) {
        case "LIST_UPDATA":
            return {
                loading: true,
                data: state.data
            }
        case "LIST_UPDATA_SUCC":
            return {
                loading: false,
                data: action.data
            }
        case "LIST_UPDATA_ERROR":
            return {
                loading: false,
                data: []
            }
        default: 
            return state;
    }
};