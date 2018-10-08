import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deveExibir: props.deveExibir
    };
  }

  componentDidMount() {
    window.jQuery('.modal').modal();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deveExibir !== this.state.deveExibir) {
      this.setState({ deveExibir: nextProps.deveExibir });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.deveExibir !== this.state.deveExibir) {
      const element = document.getElementById('confirm-button');
      element.classList.add('modal-trigger');
      element.click();
    }
  }

  render() {
    const {
      id, tituloModal, textoModal, textoBotao, acaoBotaoOk
    } = this.props;

    return (
      <div id={id} className="modal">
        <div className="modal-content">
          <h4>{tituloModal}</h4>
          <p>{textoModal}</p>
        </div>

        <div className="modal-footer">
          <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">
            {textoBotao}
          </a>
          <button onClick={acaoBotaoOk} />
        </div>
      </div>
    );
  }
}

Modal.defaultProps = {
  id: '',
  tituloModal: '',
  textoModal: '',
  textoBotao: '',
  acaoBotaoOk: () => {},
  deveExibir: false
};

Modal.propTypes = {
  id: PropTypes.string,
  tituloModal: PropTypes.string,
  textoModal: PropTypes.string,
  textoBotao: PropTypes.string,
  acaoBotaoOk: PropTypes.func,
  deveExibir: PropTypes.bool
};

export default Modal;

