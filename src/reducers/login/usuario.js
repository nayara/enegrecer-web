const ESTADO_INICIAL = {
  usuario: {},
};

const aplicarUsuario = (estado, acao) => ({
  ...estado,
  usuario: acao.usuario
});

function userReducer(estado = ESTADO_INICIAL, acao) {
  switch (acao.type) {
    case 'USERS_SET': {
      return aplicarUsuario(estado, acao);
    }
    default: return estado;
  }
}

export default userReducer;
