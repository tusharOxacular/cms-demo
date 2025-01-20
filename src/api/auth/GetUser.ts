interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Meta {
  total: number;
  page: string;
  limit: string;
  totalPages: number;
}

interface ApiResponse {
  success: boolean;
  data: User[];
  meta: Meta;
}

async function GetUsers(apiUrl: string): Promise<ApiResponse> {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("accessToken"),
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || "Failed to fetch users.");
    }

    const data: ApiResponse = await response.json(); // Cast the response to ApiResponse
    console.log("Users fetched successfully:", data.data); // Log the array of users
    return data; // Return the full ApiResponse (data and meta)
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export default GetUsers;
