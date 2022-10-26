import { createContext } from "react";
import { useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  //dados globais
  //const Authdados = {
  //    usuario: 'Marcos',
  //    perfil: 'User'
  //}

  const [usuario, setUsuario] = useState({
    usuario: "Marcos",
    perfil: "User",
  });

  return (
    <AuthContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
