import { render } from "node-sass";
import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";

test('should render header correctly', () => {
    const wrapper = shallow(<Header></Header>);
    expect(wrapper).toMatchSnapshot();

});