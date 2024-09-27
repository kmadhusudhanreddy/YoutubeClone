import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidApi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = (query) => {
    fetchData(`search/?q=${query}`).then(({ contents }) => {
      console.log(contents);

      setData(contents);
      setLoading(false);
    });
  };

  return (
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
