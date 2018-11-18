import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import createMemoryHistory from 'history/createMemoryHistory';
import { PostListContainer } from '../PostListContainer';


describe('PostListContainer.test.js', () => {

    it('renders without crashing', () => {
        const props = {
            posts: [
                { title: 'Java The Good Pards' }
            ],
            action: { getPostsAction: jest.fn() },
            history: createMemoryHistory()
        };

        const wrapper = shallow(<PostListContainer {...props} />);

        expect(wrapper).toHaveLength(1);

        const tree = toJson(wrapper);
        expect(tree).toMatchSnapshot();

        expect(wrapper.find('button')).toHaveLength(3);
    });

  
});

