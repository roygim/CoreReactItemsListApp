import { GET_ITEMS, Add_ITEM } from './types'

export const getItems = () => dispatch => {
    let url = window.location.href + "Items";
    fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: GET_ITEMS,
                payload: res
            })
        }
        ).catch(function (error) {
            alert('GET_ITEMS action error')
        });
}

export const addItems = (item) => dispatch => {
    let url = window.location.href + "Items";
    let itemObj = { 'Text': item }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(itemObj),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: Add_ITEM,
                payload: res
            })
        }
        ).catch(function (error) {
            alert('Add_ITEM action error')
        });
}