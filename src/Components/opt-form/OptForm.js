import React from 'react'
import {Container, Input,Button,Text,Break} from "./styles/styles"
import { Link } from 'react-router-dom'

export function OptForm({children,...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

OptForm.Input = function OptForm({...restProps}){
    return <Input {...restProps}/>
}

OptForm.Button = function OptFormButton({children,...restProps}){
    return <Button {...restProps} to="/signup">
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now"></img>
    </Button>
}

OptForm.Break = function OptFormBreak({children,...restProps}){
    return <Break {...restProps}>{children}</Break>
}

OptForm.Text = function OptFormText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}


