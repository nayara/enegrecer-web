const ESTADO_INICIAL = {
  usuarioAutenticado: null,
};

const aplicarUsuarioAutenticado = (estado, acao) => ({
  ...estado,
  usuarioAutenticado: acao.usuarioAutenticado
});

function sessionReducer(estado = ESTADO_INICIAL, acao) {
  switch (acao.type) {
    case 'AUTH_USER_SET' : {
      return aplicarUsuarioAutenticado(estado, acao);
    }
    default: return estado;
  }
}

export default sessionReducer;
