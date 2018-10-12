import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Combobox from '../comum/combobox';
import './painel-moderador.css';
import { detalhesDenuncia } from '../../actions/visualizarDenunciaActions';
import { removerDenuncia } from '../../actions/removerDenunciaActions';

class DenunciaRow extends Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  cliqueDetalhesDenuncia = () => {
    this.props.dispatch(detalhesDenuncia({ denuncia: this.props.denuncia }));
  }

  mudaEstado = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  remove = (idDenuncia) => {
    this.props.removerDenuncia({ idDenuncia });
  }

  render() {
    const { expanded } = this.state;
    const { denuncia } = this.props;
    const { agressao } = denuncia;
    const { vitima, denunciante, agressor } = denuncia.pessoasEnvolvidas;

    return (
      <Fragment>
        <tr className="table-row">
          <td>{agressao.status}</td>
          <td>{agressao.data}</td>
          <td>{vitima.genero}</td>
          <td>{agressao.estado}</td>
          <td>{agressao.cidade}</td>
          <td>{agressao.bairro}</td>
          <td>
            <Link to={`/moderador/visualizar-denuncia/${denuncia.id}`} className="mais-detalhes"
              onClick={this.cliqueDetalhesDenuncia}> mais detalhes </Link>
          </td>
          <td>
            <input
              type="button"
              className={`botao-expandir-retrair ${expanded ? 'botao-retrair' : 'botao-expandir'}`}
              onClick={this.mudaEstado}
            />
          </td>
        </tr>
        {expanded && (
          <Fragment>
            <tr className="descricao-denuncia-row">
              <td colSpan="2">
                <label htmlFor="nome_denunciante">Nome do Denunciante</label>
                <p id="nome_denunciante">{denunciante.nome}</p>
              </td>
              <td colSpan="1">
                <label htmlFor="email_denunciante">E-mail</label>
                <p id="email_denunciante">{denunciante.email}</p>
              </td>

              <td colSpan="1">
                <label htmlFor="telefone_denunciante">Telefone</label>
                <p id="telefone_denunciante">{denunciante.telefone}</p>
              </td>

              <td colSpan="4">
                <label htmlFor="genero_denunciante">Gênero</label>
                <p id="genero_denunciante">{denunciante.genero}</p>
              </td>
            </tr>

            <tr className="descricao-denuncia-row">
              <td colSpan="8">
                <label htmlFor="descricao_agressao">Descrição Denúncia</label>
                <p id="descricao_agressao">{agressao.descricao}</p>
              </td>
            </tr>

            <tr className="descricao-denuncia-row">
              <td colSpan="8">
                <hr />
              </td>
            </tr>

            <tr className="row-acoes-denuncia">
              <td colSpan="5">
                <Combobox
                  label="Classifique a denúncia"
                  itens={['Injúria Racial', 'Racismo']}
                />
              </td>
              <td style={{ textAlign: 'right' }}>
                <input className="remover-denuncia" type="button" value="Deletar" onClick={() => this.remove(denuncia.id)} />
              </td>

              <td colSpan="2" style={{ textAlign: 'center' }}>
                <div className="waves-effect waves-light btn botao-aceitar-denuncia">
                  <input type="button" className="aceitar-denuncia" value="aceitar denúncia" onClick={this.aceitarDenuncia} />
                </div>
              </td>
            </tr>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

DenunciaRow.propTypes = {
  denuncia: PropTypes.shape({
    agressao: PropTypes.shape({
      status: PropTypes.string,
      data: PropTypes.string,
      estado: PropTypes.string,
      cidade: PropTypes.string,
      bairro: PropTypes.string
    }),
    vitima: PropTypes.shape({
      genero: PropTypes.string
    })
  }).isRequired,
  removerDenuncia: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators({
  removerDenuncia,
}, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(DenunciaRow);
