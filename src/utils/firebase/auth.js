import { auth } from '../firebaseUtils';

export const logarComEmailSenha = (email, senha) => {
  auth.signInWithEmailAndPassword(email, senha);
};
