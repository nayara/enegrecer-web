import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Modal from './modal';

describe('Modal', () => {
  const acoes = [
    {
      nome: 'blah'
    }
  ];

  it.only('deve construir o componente corretamente', () => {
    const modal = shallow(<Modal acoes={acoes} />);
    const modalJson = toJson(modal);
    expect(modalJson).toMatchSnapshot();
  });

  it.only('deve exibir modal quando a propriedade deveExibir for true', () => {
    const modalWrapper = shallow(<Modal
      id="some"
      tituloModal="some"
      textoModal=""
      textoBotao=""
      acoes={acoes}
      deveExibir
    />);

    const found = modalWrapper.find('.modal');
    expect(found.exists()).toBeTruthy();
    expect(found).toHaveLength(1);
  });

  it.only('não deve exibir o modal quando a propriedade deveExibir for false', () => {
    const modalWrapper = mount(<Modal
      id="some"
      tituloModal="some"
      textoModal=""
      textoBotao=""
      acoes={acoes}
      deveExibir={false}
    />);

    const found = modalWrapper.find('.modal');
    expect(found.exists()).toBeFalsy();
  });
});
