import expect from 'expect';
import {store} from '../index';

describe('store', () => {

    it('should work with a series of actions', () => {
        const actions = [
            {
                type: 'ADD_TODO',
                text: 'My task 1',
                id: 1
            },            
            {
                type: 'ADD_TODO',
                text: 'My task 2',
                id: 2
            }
        ];

        actions.forEach(action => store.dispatch(action));

        const actual = store.getState();
        const expected = {
            "todos": [
                {
                    id: 1,
                    text: 'My task 1',
                    completed: false
                },
                {
                    id: 2,
                    text: 'My task 2',
                    completed: false
                }
            ],
            "visibilityFilter": "SHOW_ALL"
        };

        expect(actual).toEqual(expected);
    });
});