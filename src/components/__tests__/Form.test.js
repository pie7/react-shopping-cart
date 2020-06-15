import React from 'react';
import { shallow } from 'enzyme';
import { Form } from "../Form";

describe('<Form />', () => {
    it('should render <Form />', () => {
        const props = {
            title: ''
        }

        const wrapper = shallow(<Form {...props} />)
        console.log(wrapper.debug())
    })
})