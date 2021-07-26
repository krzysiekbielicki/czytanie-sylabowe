import * as React from 'react'

function Syllabe({text, color}) {

    const printable = text.replace(/(?:\r\n|\r|\n)/g, '<br />')

    return (
        <span style={{color: color}}>{printable}</span>
    )
}

export function Word({text}) {

    const syllabes = text.split("@")
    console.log(syllabes);
    
    return (
        <span>
            {syllabes.map( (it, i) => {
                return (<Syllabe text={it} color={i%2 === 0 ? "black" : "red"}/>)
            })}{' '}
        </span>
    )

}