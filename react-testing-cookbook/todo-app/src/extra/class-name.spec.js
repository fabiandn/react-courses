import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import expect from 'expect';

const CoolComponent = ({name}) => (
    <div className={name}>
        Hello World
    </div>
);

describe('Class name test', () => {

    it('should render the ', () => {
        const renderer = new ShallowRenderer();
        renderer.render(<CoolComponent name={'test'}/>);
        const actual = renderer.getRenderOutput().props.className.includes("test");
        const expected = true;
        
        expect(actual).toEqual(expected);
    })
})
