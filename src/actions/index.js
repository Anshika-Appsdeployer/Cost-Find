// Actions = What to do(i.e.), we have to do Increment and Decrement
export const incBedroom = () => {
    return {
        type: "INCREMENT_BEDROOM"
    }
}

export const decBedroom = () => {
    return {
        type: "DECREMENT_BEDROOM"
    }
}

export const incBathroom = () => {
    return {
        type: "INCREMENT_BATHROOM"
    }
}

export const decBathroom = () => {
    return {
        type: "DECREMENT_BATHROOM"
    }
}