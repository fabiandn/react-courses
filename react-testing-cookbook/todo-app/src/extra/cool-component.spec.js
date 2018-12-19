import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

const CoolComponent = ({greeting}) => (
    <div>
        <h1>Greeting</h1>
        <div>{greeting}</div>
    </div>
);

describe('CoolComponent', () => {

    it('should render the ', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<CoolComponent greeting={'Hello World'}/>);
        const actual = renderer.getRenderOutput();
        const expected = (
            <div>
                <h1>Greeting</h1>
                <div>Hello World</div>
            </div>
        );
        
        expect(actual).toEqual(expected);
    })
})
