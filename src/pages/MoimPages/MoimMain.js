import React from 'react'
import { useDispatch } from 'react-redux'
import { moimReadMD } from '../../redux/async/moim'
import { history } from '../../redux/store'
import PostDesc from '../../elements/Moim/PostDesc'
import '../../styles/moim/moim-main.scss'
import { changeNav } from '../../redux/modules/userSlice'
import { loginCheckMD } from '../../redux/async/user'

const MoimMain = () => {
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(loginCheckMD())
        dispatch(moimReadMD())
        dispatch(changeNav('moim'))
    }, [])
    return (
        <>
            <section className="moim-main-layout">
                <PostDesc />
                <button
                    className="moim-add-btn"
                    onClick={() => {
                        history.push('/moim/write')
                    }}
                >
                    +
                </button>
            </section>
        </>
    )
}

export default MoimMain
