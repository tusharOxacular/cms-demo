interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    accessToken: string;
    role: string;
  };
}

async function loginUser(
  apiUrl: string,
  loginData: LoginRequest
): Promise<void> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password.");
    }

    const data: LoginResponse = await response.json();

    // Store tokens and user info in session storage
    sessionStorage.setItem("accessToken", data.data.accessToken);
    sessionStorage.setItem("role", data.data.role);
  } catch (error) {
    throw error;
  }
}

export default loginUser;
