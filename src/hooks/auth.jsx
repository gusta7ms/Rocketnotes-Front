/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { api } from "../services/api";

import { useState } from "react";
import { createContext, useContext, useEffect } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("rocketNotes:user", JSON.stringify(user));
      localStorage.setItem("rocketNotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível entrar ");
      }
    }
  }

  function singOut() {
    localStorage.removeItem("rocketNotes:user");
    localStorage.removeItem("rocketNotes:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    if (avatarFile) {
      const fileUploadForm = new FormData();
      fileUploadForm.append("avatar", avatarFile);

      const response = await api.patch("/users/avatar", fileUploadForm);
      user.avatar = response.data.avatar;
    }

    try {
      await api.put("/users", user);

      localStorage.setItem("rocketNotes:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o perfil ");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("rocketNotes:user");
    const token = localStorage.getItem("rocketNotes:token");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ singIn, singOut, updateProfile, user: data.user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
