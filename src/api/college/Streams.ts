export const fetchStreams = async (filterName: string, limit = 10) => {
  try {
    const response = await fetch(
      `http://localhost:8001/cms-stream/all?limit=${limit}&filter_name=${filterName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching streams:", error);
    throw error;
  }
};
