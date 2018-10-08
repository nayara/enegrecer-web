import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import ModeradorLogin from './ModeradorLogin';

describe('ModeradorLogin', () => {
  it.only('deve construir o componente corretamente', () => {
    const moderadorLogin = shallow(<ModeradorLogin />);
    const moderadorLoginJson = toJson(moderadorLogin);
    expect(moderadorLoginJson).toMatchSnapshot();
  });

  it.only('deve mostrar o modal quando submeter o form com dados inválidos', () => {
    const moderadorLoginWrapper = mount(<ModeradorLogin />);
    moderadorLoginWrapper.debug();

    const found = moderadorLoginWrapper.find('.modal');
    expect(found.exists()).toBeFalsy();
  });
});
