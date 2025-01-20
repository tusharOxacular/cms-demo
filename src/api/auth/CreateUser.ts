interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface CreateUserResponse {
  data: {
    // This is likely where the actual user data is nested
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

async function createUser(
  apiUrl: string,
  userData: CreateUserRequest
): Promise<CreateUserResponse> {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to create user.");
    }

    const data: CreateUserResponse = await response.json();
    console.log("User created successfully:", data.data); // Access data via data.data
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

export default createUser;
