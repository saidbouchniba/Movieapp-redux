import { ADDMOVIE, DELETEMOVIE, EDITMOVIE, GETMOVIE } from "./Actiontype"


export const add = (data) => {
    return {
        type: ADDMOVIE,
        payload: data
    }

}

export const deletemovie = (id) => {
    return {
        type: DELETEMOVIE,
        payload: id
    }

}

export const edit = (id, data) => {
    return {
        type: EDITMOVIE,
        payload: { id, data }
    }

}
export const getmovie= (id) => {
    return {
        type: GETMOVIE,
        payload:  id
    }

}
