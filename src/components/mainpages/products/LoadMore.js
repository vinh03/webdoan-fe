import React, {useContext} from 'react'
import {GlobalState} from '../../../GlobalState'

function LoadMore() {
    const state = useContext(GlobalState)
    const [page, setPage] = state.productsAPI.page
    const [result] = state.productsAPI.result

    return (
        <div className="load_more">
            {
                result < page * 9 ? ""
                : <button className='px-0 py-6'  onClick={() => setPage(page+1)}>Tải thêm</button>
            }
        </div>
    )
}

export default LoadMore
