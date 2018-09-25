import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import denunciaComSucessoReducer from './denuncia/denunciaComSucessoReducer';
import listaDenunciaReducer from './denuncia/listaDenunciaReducer';
import visualizarDenunciaReducer from './denuncia/visualizarDenunciaReducer';
import sessaoReducer from './login/sessao';
import usuarioReducer from './login/usuario';

export default combineReducers({
  denunciaComSucessoReducer,
  listaDenunciaReducer,
  visualizarDenunciaReducer,
  form: formReducer,
  estadoSessao: sessaoReducer,
  estadoUsuario: usuarioReducer,
});
