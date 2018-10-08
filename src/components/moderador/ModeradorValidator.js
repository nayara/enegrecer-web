import { auth } from '../../utils/firebaseUtils';

class ModeradorValidator {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  validate = () => {
    const response = { };

    return auth.signInWithEmailAndPassword(this.email, this.senha)
      .then(() => {
        response.code = 200;
        response.message = 'Success';
        return response;
      }).catch((error) => {
        throw new Error(error);
      });
  }
}

export default ModeradorValidator;
