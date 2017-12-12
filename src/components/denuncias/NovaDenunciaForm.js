import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import React, { Component } from 'react';
import NovaVitimaForm from './vitima/NovaVitimaForm';
import DetalhamentoDenuncia from './DetalhamentoDenuncia';

export default class NovaDenunciaForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      detalhamento: '',
      dataOcorrencia: '',
      horaOcorrencia: '',
      idCategoria: '',
      endereco: '',
      estado: '',
      vitima: {},
      testemunha: {}
    }
  }

  handleChange(dados) {
    this.setState({
      ...dados,
    }, () => {
      this.props.alterarDenunciaForm(this.state)
    });
  }

  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
    this.props.salvarDenuncia();
  }

  render() {
    return (
      <form
        name="form-denuncia"
        id="form-nova-denuncia"
        onSubmit={event => this.handleSubmit(event)}
      >
        <DetalhamentoDenuncia handleChange={this.handleChange} />

        <NovaVitimaForm handleChange={this.handleChange} />

        <Button name="salvarDenuncia" type="submit" id="btn-salvar-denuncia" >
          Salvar
        </Button>
      </form>);
  }
}
NovaVitimaForm.defaultProps = {
  alterarDenunciaForm: () => {}
}
NovaDenunciaForm.propTypes = {
  salvarDenuncia: PropTypes.func.isRequired,
  alterarDenunciaForm: PropTypes.func
};
