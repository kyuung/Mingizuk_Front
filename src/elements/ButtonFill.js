import React from 'react'
import styled from 'styled-components'

const ButtonFill = (props) => {
    const {
        children,
        _width,
        _fontSize,
        _margin,
        _padding,
        _bgColor,
        _color,
        _bradius,
        _onClick,
        _others,
        _cursor,
    } = props

    const styles = {
        _width,
        _fontSize,
        _margin,
        _padding,
        _bgColor,
        _color,
        _bradius,
        _onClick,
        _others,
        _cursor,
    }

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>
                {children}
            </ElButton>
        </React.Fragment>
    )
}

ButtonFill.defaultProps = {
    children: '이건버튼',
    _width: '6rem',
    _padding: '2rem',
    _fontSize: '1rem',
    _margin: '0.5rem',
    _bgColor: 'black',
    _color: '#fff',
    _bradius: '3px',
    _others: '',
    _cursor: 'pointer',
    _onClick: () => {},
}

const ElButton = styled.button`
    width: ${(props) => props._width};
    font-size: ${(props) => props._fontSize};
    margin: ${(props) => props._margin};
    padding: ${(props) => props._padding};
    background-color: ${(props) => props._bgColor};
    color: ${(props) => props._color};
    border-radius: ${(props) => props._bradius};
    background-color: ${(props) => props._bgColor};
    ${(props) => props._others};
    border: none;
    cursor: ${(props) => props._cursor};
`

export default ButtonFill
