import { put, call, fork, take } from "redux-saga/effects";
import axios from 'axios'
import { FETCH_PRODUCT, SWITCH_PRODUCT, TRIGGER_SEARCH } from "../reducers/product";

const keyword = "lamborghini+car"

const api = (url) => axios(url)

function* fetchProduct(action) {
    try {
        const data = yield call(api, `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${keyword}&orientation=horizontal&image_type=photo&pretty=true`)
        yield put({ type: FETCH_PRODUCT, payload: data  })
    } catch (error) {
        yield put({ type: FETCH_PRODUCT, error })
    }
}



function* switchProduct() {
    try {
        while (true) {
            const action = yield take(TRIGGER_SEARCH)
            const { searchKeyword } = action.payload
            const data = yield call(api, `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${searchKeyword}&orientation=horizontal&image_type=photo&pretty=true`)
            yield put({ type: SWITCH_PRODUCT, payload: data })
        }
    } catch (error) {
        yield put({ type: SWITCH_PRODUCT, error })
    }
}

export function* startup() {
    yield call(fetchProduct)
}

export default function* root() {
    yield fork(startup)
    yield fork(switchProduct)
}