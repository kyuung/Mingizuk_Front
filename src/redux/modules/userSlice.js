import { createSlice, isFulfilled } from '@reduxjs/toolkit'
import { getToken } from '../../shared/utils'
import { signupMD, loginMD, logoutMD, loginCheckMD, userInfoMD } from '../async/user'
import { history } from '../store'
import { useDispatch } from 'react-redux'

const initialState = {
    isLogin: false,
    userInfo: {
        nickName:'',
        userPw:''
    },
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        userReducer: (state, { payload }) => {
            state.isLogin = payload
            //일반 리덕스
        },
        
    },

    extraReducers: {
        // * login
        [loginMD.fulfilled]: (state, { payload }) => {
            const accessToken = payload.data.accessToken
            const refreshToken = payload.data.refreshToken
            sessionStorage.setItem('accessToken', accessToken)
            sessionStorage.setItem('refreshToken', refreshToken)
            state.isLogin = true
        },

        // * logout
        [logoutMD.fulfilled]: (state, { payload }) => {
            const accessToken = getToken().accessToken
            const refreshToken = getToken().refreshToken
            sessionStorage.removeItem('accessToken')
            sessionStorage.removeItem('refreshToken')
            state.isLogin = false
        },

        // * loginCheck
        [loginCheckMD.fulfilled]: (state, { payload }) => {
            state.isLogin = true

            state.userInfo.userEmail = payload.data.user.userEmail
            state.userInfo.nickName = payload.data.user.nickName
            state.userInfo.userPw = payload.data.user.userPw
        },

        [loginMD.pending]: (state, { payload }) => {}, //response NO!
        [loginMD.rejected]: (state, { payload: errorMessage }) => {},
        [signupMD.fulfilled]: (state, { payload }) => {},
    

        // * userInfo
        [userInfoMD.fulfilled]:(state, {payload}) => {
            console.log(payload,'payload')
            //state.userInfo.userPw = payload.data.user.userPw
        },
    },
    
})



export const { userReducer } = userSlice.actions
export default userSlice
