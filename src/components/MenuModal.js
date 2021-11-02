import React from 'react'
import { FlexColumn, FlexRow, Text, ButtonOutlined } from '../elements'
import { AccountCircleRounded } from '@material-ui/icons'
import { ExitToAppRounded } from '@material-ui/icons'

import { Footer } from '../components/index'

import { history } from '../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { logoutMD } from '../redux/async/user'

const MenuModal = () => {
    const dispatch = useDispatch()
    const is_login = useSelector((state) => state.user.isLogin)
    const logout = () => {
        dispatch(logoutMD())
    }
    const [modalStatus, setModalStatue] = React.useState(false)

    if (is_login) {
        return (
            <React.Fragment>
                {modalStatus && (
                    <FlexRow _border={'none'} _others="z-index:5">
                        <div
                            style={{
                                width: '100vw',
                                height: '100vh',
                                padding: '1rem',
                                boxSizing: 'border-box',
                                backgroundColor: 'black',
                                opacity: '0.3',
                                position: 'fixed',
                                top: '46px',
                                left: '0rem',
                            }}
                            onClick={() => {
                                {
                                    modalStatus && setModalStatue(false)
                                }
                            }}
                        ></div>
                        <div
                            style={{
                                width: '200px',
                                height: '100vh',
                                padding: '1rem',
                                boxSizing: 'border-box',
                                backgroundColor: '#fff',
                                position: 'fixed',
                                top: '46px',
                                left: '0rem',
                            }}
                        >
                            <FlexColumn
                                _border={'none'}
                                _width={'100%'}
                                _height={'100%'}
                                _justify={'start'}
                            >
                                <FlexRow
                                    _justify={'start'}
                                    _border={'none'}
                                    _others={
                                        'padding-bottom:5px; border-bottom:1px solid #dbdbdb'
                                    }
                                >
                                    <AccountCircleRounded
                                        style={{
                                            marginRight: '10px',
                                            color: '#6dddd0',
                                            fontSize: '27px',
                                            background: '#fff',
                                            borderRadius: '50px',
                                        }}
                                    />
                                    <Text _margin={'0px'} _padding={'0px'}>
                                        <span style={{ fontWeight: '700' }}>
                                            밍기적
                                        </span>{' '}
                                        님
                                    </Text>
                                    <div onClick={logout}>
                                        <ExitToAppRounded
                                            style={{
                                                marginLeft: '2.7rem',
                                                color: '#c1c1c1',
                                                fontSize: '27px',
                                                background: '#fff',
                                                borderRadius: '50px',
                                                cursor: 'pointer',
                                            }}
                                        />
                                    </div>
                                </FlexRow>
                                <FlexColumn
                                    _height={'100vh'}
                                    _align={'start'}
                                    _justify={'space-between'}
                                    _border={'none'}
                                >
                                    <FlexColumn
                                        _height={'false'}
                                        _align={'start'}
                                        _border={'none'}
                                    >
                                        <ButtonOutlined
                                            _border={'none'}
                                            _padding={'0px'}
                                            _margin={'0px'}
                                            _width={'false'}
                                            _onClick={() => {
                                                history.push('/users')
                                            }}
                                        >
                                            <Text
                                                _fontSize={'0.9rem'}
                                                _fontWeight={'700'}
                                                _padding={'1rem 0px 0px 0px'}
                                                _margin={'0px'}
                                            >
                                                마이페이지
                                            </Text>
                                        </ButtonOutlined>
                                        <ButtonOutlined
                                            _border={'none'}
                                            _padding={'0px'}
                                            _margin={'0px'}
                                            _width={'false'}
                                            _onClick={() => {
                                                history.push('/history')
                                            }}
                                        >
                                            <Text
                                                _fontSize={'0.9rem'}
                                                _fontWeight={'700'}
                                                _padding={'1rem 0px 0px 0px'}
                                                _margin={'0px'}
                                            >
                                                히스토리
                                            </Text>
                                        </ButtonOutlined>
                                        <ButtonOutlined
                                            _border={'none'}
                                            _padding={'0px'}
                                            _margin={'0px'}
                                            _width={'false'}
                                            _onClick={() => {
                                                history.push('/moim')
                                            }}
                                        >
                                            <Text
                                                _fontSize={'0.9rem'}
                                                _fontWeight={'700'}
                                                _padding={'1rem 0px 0px 0px'}
                                                _margin={'0px'}
                                            >
                                                모임 게시판
                                            </Text>
                                        </ButtonOutlined>
                                    </FlexColumn>
                                    <Footer />
                                </FlexColumn>
                            </FlexColumn>
                        </div>
                    </FlexRow>
                )}
                <ButtonOutlined
                    navIcon
                    _icon={'nav-menu'}
                    _onClick={() => {
                        {
                            modalStatus
                                ? setModalStatue(false)
                                : setModalStatue(true)
                        }
                    }}
                />
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            {modalStatus && (
                <FlexRow _border={'none'}>
                    <div
                        style={{
                            width: '100vw',
                            height: '100vh',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: 'black',
                            opacity: '0.3',
                            position: 'fixed',
                            top: '46px',
                            left: '0rem',
                        }}
                        onClick={() => {
                            {
                                modalStatus && setModalStatue(false)
                            }
                        }}
                    ></div>
                    <div
                        style={{
                            width: '200px',
                            height: '100vh',
                            padding: '1rem',
                            boxSizing: 'border-box',
                            backgroundColor: '#fff',
                            position: 'fixed',
                            top: '46px',
                            left: '0rem',
                        }}
                    >
                        <FlexColumn
                            _border={'none'}
                            _width={'100%'}
                            _height={'100%'}
                            _justify={'start'}
                        >
                            <FlexColumn
                                _height={'100vh'}
                                _justify={'space-between'}
                                _border={'none'}
                            >
                                <FlexColumn
                                    _border={'none'}
                                    _others={'padding-bottom:5px; '}
                                    _height={'false'}
                                >
                                    <FlexColumn
                                        _border={'none'}
                                        _others={
                                            'border-bottom: 1px solid lightgray'
                                        }
                                        _height={'false'}
                                    >
                                        <Text
                                            _color={'gray'}
                                            _margin={'1rem 0px'}
                                        >
                                            로그인 후 이용해주세요.
                                        </Text>
                                        <ButtonOutlined
                                            _margin={'0px 0px 1rem 0px'}
                                            _onClick={() => {
                                                history.push('/login')
                                            }}
                                        >
                                            <Text
                                                _margin={'0px'}
                                                _padding={'0px'}
                                            >
                                                로그인 하기
                                            </Text>
                                        </ButtonOutlined>
                                    </FlexColumn>
                                    <Text _color={'gray'} _margin={'1rem 0px'}>
                                        아직 회원가입 전이라면?
                                    </Text>
                                    <ButtonOutlined
                                        _margin={'0px'}
                                        _onClick={() => {
                                            history.push('/signup')
                                        }}
                                    >
                                        <Text _margin={'0px'} _padding={'0px'}>
                                            회원가입 하기
                                        </Text>
                                    </ButtonOutlined>
                                </FlexColumn>
                                <Footer />
                            </FlexColumn>
                        </FlexColumn>
                    </div>
                </FlexRow>
            )}
            <ButtonOutlined
                navIcon
                _icon={'nav-menu'}
                _onClick={() => {
                    {
                        modalStatus
                            ? setModalStatue(false)
                            : setModalStatue(true)
                    }
                }}
            />
        </React.Fragment>
    )
}

export default MenuModal
