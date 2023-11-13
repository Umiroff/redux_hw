const reducer = (state, action) => {
    if (action.type === 'LOADING') {
        return {
            ...state, loading: true
        }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return {
            ...state, data: action.payload, loading: false
        }
    }
    if (action.type === 'REMOVE'){
        return {
            ...state,
            data: state.data.filter((item) => item.id !== action.payload)
        }
    }
    if (action.type === 'READMORE') {
        return {
            ...state, readmore: true
        }
    }
}

export default reducer;