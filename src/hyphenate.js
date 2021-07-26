import { hyphenateSync } from 'hyphen/pl'
import { Word } from './components/Word'
import { Fragment } from 'react';

export function Hyphenated({text}) {
    const hyphenatedLines = hyphenateSync(text, {hyphenChar: "@", minWordLength: 3}).split("\n");
    return hyphenatedLines.map (it => {
        const hyphenatedWords = it.split(" ");
        return (
            <Fragment>
            { hyphenatedWords.map( it => (<Word text={it} />)) }
            <br/>
            </Fragment>
        );
    });
}
