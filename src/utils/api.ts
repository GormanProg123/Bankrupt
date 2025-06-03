const API_URL = import.meta.env.VITE_API_URL;

export const fetchUserData = async () => {
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) throw new Error("Unauthorized");

    return await response.json();
  } catch (error) {
    console.error("Ошибка при получении данных пользователя:", error);
    return null;
  }
};

export const resetPasswordRequest = async (
  email: string,
  phone_number: string,
  social_security: string
) => {
  try {
    const response = await fetch(`${API_URL}/auth/reset`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, phone_number, social_security }),
    });

    if (!response.ok) {
      throw new Error("Failed to verify user information");
    }

    return true;
  } catch (error) {
    console.error("Ошибка при сбросе пароля:", error);
    throw error;
  }
};

export const resetPasswordConfirm = async (
  token: string,
  new_password: string
) => {
  try {
    const response = await fetch(`${API_URL}/auth/reset`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, new_password }),
    });

    if (!response.ok) {
      throw new Error("Failed to reset password");
    }

    return true;
  } catch (error) {
    console.error("Ошибка при подтверждении сброса пароля:", error);
    throw error;
  }
};

export const loginRequest = async (email: string, password: string) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || "Login failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Ошибка при входе в систему:", error);
    throw error;
  }
};
