export default function user(state={
    data: {
        loginname: "",
        avatar_url: "",
        create_at: "",
        score: "",
        recent_topics: [],
        recent_replies: []
    },
    loading: true
}, action) {
    switch (action.type) {
        case "USER_UPDATA":
            return {
                data: state.data,
                loading: true
            }
        case "USER_UPDATA_SUCC":
            return {
                data: action.data.data,
                loading: false
            }
        case "USER_UPDATA_ERROR":
            return {
                data: {
                    loginname: "",
                    avatar_url: "",
                    create_at: "",
                    score: "",
                    recent_topics: [],
                    recent_replies: []
                },
                loading: false
            }
        default:
            return state;
    }
};