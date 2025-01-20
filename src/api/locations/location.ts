export const fetchCountries = async (filterName: string) => {
  try {
    const response = await fetch(
      `http://localhost:8001/cms-location/countries?filter_name=${filterName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

export const fetchStates = async (parentId: number, filterName: string) => {
  try {
    const response = await fetch(
      `http://localhost:8001/cms-location/states?parent_id=${parentId}&page=1&filter_name=${filterName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching states:", error);
    throw error;
  }
};

export const fetchCities = async (filterName: string) => {
  try {
    const response = await fetch(
      `http://localhost:8001/cms-location/cities?filter_name=${filterName}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching cities:", error);
    throw error;
  }
};
