import { createContext, useContext, useEffect, useState } from "react";
import { fetchUserData } from "../utils/api";

type User = {
  first_name: string;
  last_name: string;
  email?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        const mappedUser: User = {
          first_name: data.name,
          last_name: data.surname,
        };
        setUser(mappedUser);
        localStorage.setItem("registrationData", JSON.stringify(mappedUser));
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
