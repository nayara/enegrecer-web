import React, { Component } from 'react';
import M from 'materialize-css';
import { auth, storageKey } from '../../utils/firebaseUtils';
import Modal from '../comum/modal/modal';
import './moderador-login.css';

<<<<<<< HEAD
=======
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const ESTADO_INICIAL = {
  email: '',
  senha: '',
  error: null
};

>>>>>>> Ajusta inicilização da modal de erro do login moderador
export default class ModeradorLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      senha: '',
      error: null,
      deveExibirPopup: false
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    // auth.onAuthStateChanged((user) => {
    //   if (user.uid.includes('obr3tOVUmgfM0WYf51ftqE4zuqz2')) {
    //     window.localStorage.setItem(storageKey, user.uid);
    //   } else {
    //     window.localStorage.removeItem(storageKey);
    //   }
    // });
  }

  onSubmit = (event) => {
    const {
      email,
      senha,
    } = this.state;

    const self = this;

    auth.signInWithEmailAndPassword(email, senha).then(() => {
      window.location.href = '/moderador/painel';
    }).catch((error) => {
      const message = this.trataMensagemDeErro(error);
      self.setState({ deveExibirPopup: true, message });
    });
=======
    auth.onAuthStateChanged((user) => {
      if (user.uid.includes('obr3tOVUmgfM0WYf51ftqE4zuqz2')) {
        window.localStorage.setItem(storageKey, user.uid);
      } else {
        window.localStorage.removeItem(storageKey);
      }
    });

    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.modal');
      M.Modal.init(elems, {});
    });
  }

  onSubmit = (event) => {
    const { email, senha } = this.state;

    auth
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        window.location.href = '/moderador/painel';
      })
      .catch((error) => {
        const message = this.trataMensagemDeErro(error);
        this.setState(updateByPropertyName('error', message));

        let element = document.getElementById('confirm-button');
        element.classList.add('modal-trigger');
        element.click();

        element = document.getElementById('confirm-button');
        element.classList.remove('modal-trigger');
      });
>>>>>>> Ajusta inicilização da modal de erro do login moderador

    event.preventDefault();
  };

  trataMensagemDeErro = (error) => {
    const errorMap = {
      'auth/wrong-password': 'Senha errada',
      'auth/user-not-found': 'Usuário não encontrado',
      'auth/user-disabled': 'Usuário inativo',
      'auth/invalid-email': 'Email inválido'
    };

    return errorMap[error.code];
  };

  render() {
<<<<<<< HEAD
    const {
      email,
      senha,
      error,
      deveExibirPopup
    } = this.state;
=======
    const { email, senha, error } = this.state;
>>>>>>> Ajusta inicilização da modal de erro do login moderador

    const isInvalid = senha === '' || email === '';

    return (
      <div className="row login_moderador">
        <form className="col s4 formulario_login_moderador" onSubmit={this.onSubmit}>
          <div className="input-field col s12">
<<<<<<< HEAD
            <input id="login_moderador" type="text" className="validate" value={email} onChange={event => this.setState({ email: event.target.value })} />
            <label htmlFor="login_moderador">Login Moderador</label>
          </div>
          <div className="input-field col s12">
            <input id="senha_moderador" type="password" className="validate" value={senha} onChange={event => this.setState({ senha: event.target.value })} />
            <label htmlFor="senha_moderador">Senha Moderador</label>
          </div>
          <button id="confirm-button" data-target="modal_erro" className="waves-effect waves-light btn" disabled={isInvalid} type="submit" name="action" >
              Entrar
          </button>
=======
            <input
              id="login_moderador"
              type="text"
              className="validate"
              value={email}
              onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            />
            <label htmlFor="login_moderador">Login Moderador</label>
          </div>
          <div className="input-field col s12">
            <input
              id="senha_moderador"
              type="password"
              className="validate"
              value={senha}
              onChange={event => this.setState(updateByPropertyName('senha', event.target.value))}
            />
            <label htmlFor="senha_moderador">Senha Moderador</label>
          </div>
          <button
            id="confirm-button"
            className="waves-effect waves-light btn"
            data-target="modal_erro"
            disabled={isInvalid}
            type="submit"
            name="action"
          >
            Entrar
          </button>

          <Modal
            id="modal_erro"
            tituloModal="Erro ao logar"
            textoModal={error}
            textoBotao="FECHAR"
          />
>>>>>>> Ajusta inicilização da modal de erro do login moderador
        </form>
        <Modal
          id="modal_erro"
          tituloModal="Erro ao logar"
          textoModal={error}
          textoBotao="FECHAR"
          acaoBotaoOk={() => console.log('ok button')}
          deveExibir={deveExibirPopup}
        />
      </div>
    );
  }
}
