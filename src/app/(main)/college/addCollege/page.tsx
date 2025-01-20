"use client";
import { useState, useEffect } from "react";
import Input from "@/components/atoms/CollegeComponents/Input";
import SelectInput from "@/components/atoms/CollegeComponents/SelectInput";
import Button from "@/components/atoms/Button";
import {
  fetchCountries,
  fetchStates,
  fetchCities,
} from "@/api/locations/location";
import { fetchStreams } from "@/api/college/Streams";

function AddCollege() {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [countries, setCountries] = useState<any[]>([]);
  const [states, setStates] = useState<any[]>([]);
  const [cities, setCities] = useState<any[]>([]);
  const [streams, setStreams] = useState<any[]>([]);

  const [countrySearch, setCountrySearch] = useState<string>("");
  const [stateSearch, setStateSearch] = useState<string>("");
  const [citySearch, setCitySearch] = useState<string>("");
  const [streamSearch, setStreamSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with values: ", formValues);
  };

  const handleReset = () => {
    setFormValues({});
    setCountrySearch("");
    setStateSearch("");
    setCitySearch("");
    setStreamSearch("");
  };

  const handleInputChange = (name: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = async (value: string) => {
    try {
      if (value) {
        const result = await fetchCountries(value);
        setCountries(result);
      }
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const handleStateChange = async (parentId: any, value: string) => {
    try {
      if (value) {
        const result = await fetchStates(parentId, value);
        setStates(result);
      }
    } catch (error) {
      console.error("Error fetching states: ", error);
    }
  };

  const handleCityChange = async (value: string) => {
    try {
      if (value) {
        const result = await fetchCities(value);
        setCities(result);
      }
    } catch (error) {
      console.error("Error fetching city : ", error);
    }
  };

  const handleStreamChange = async (value: string) => {
    try {
      if (value) {
        const result = await fetchStreams(value);
        setStreams(result);
      }
    } catch (error) {
      console.error("Error fetching streams: ", error);
    }
  };

  useEffect(() => {
    const fetchCountriesAsync = async () => {
      await handleCountryChange(countrySearch);
    };
    fetchCountriesAsync();
  }, [countrySearch]);

  useEffect(() => {
    const parentId = formValues["Country"];
    const fetchStatesAsync = async () => {
      await handleStateChange(parentId, stateSearch);
    };
    fetchStatesAsync();
  }, [stateSearch, formValues["Country"]]);

  useEffect(() => {
    const fetchCitiesAsync = async () => {
      await handleCityChange(citySearch);
    };
    fetchCitiesAsync();
  }, [citySearch]);

  useEffect(() => {
    const fetchStreamsAsync = async () => {
      await handleStreamChange(streamSearch);
    };
    fetchStreamsAsync();
  }, [streamSearch]);

  const fields = [
    {
      type: "input",
      name: "Name of College",
      inputType: "text",
      placeholder: "Name of College",
      required: true,
    },
    {
      type: "input",
      name: "Short Name",
      inputType: "text",
      placeholder: "Short Name",
    },
    {
      type: "input",
      name: "Search Name",
      inputType: "text",
      placeholder: "Search Name",
    },
    {
      type: "input",
      name: "Parent College ID",
      inputType: "number",
      placeholder: "Parent College ID",
    },
    {
      type: "input",
      name: "Country",
      inputType: "text",
      placeholder: "Type to search...",
      required: true,
      dynamicOptions: countries,
      value: countrySearch,
    },
    {
      type: "input",
      name: "State",
      inputType: "text",
      placeholder: "Type to search...",
      required: true,
      dynamicOptions: states,
      value: stateSearch,
    },
    {
      type: "input",
      name: "City",
      inputType: "text",
      placeholder: "Type to search...",
      required: true,
      dynamicOptions: cities,
      value: citySearch,
    },
    {
      type: "input",
      name: "Stream",
      inputType: "text",
      placeholder: "Type to search...",
      dynamicOptions: streams,
      value: streamSearch,
    },
    {
      type: "input",
      name: "Location",
      inputType: "text",
      placeholder: "Location",
    },
    {
      type: "input",
      name: "PIN Code",
      inputType: "number",
      placeholder: "PIN Code",
    },
    {
      type: "input",
      name: "Longitude_Latitude",
      inputType: "text",
      placeholder: "Longitude_Latitude",
    },
    {
      type: "input",
      name: "College Email",
      inputType: "email",
      placeholder: "College Email",
    },
    {
      type: "input",
      name: "College Phone",
      inputType: "number",
      placeholder: "College Phone",
    },
    {
      type: "input",
      name: "College Website",
      inputType: "text",
      placeholder: "College Website",
    },
    {
      type: "select",
      name: "Type of College",
      options: [
        "State Institute",
        "Government",
        "Private Institute",
        "Public",
        "National",
        "Autonomous Institute",
        "Public/Government",
        "Private",
        "Public-Private",
        "Other",
      ],
      value: formValues["Type of College"] || "",
    },
    {
      type: "input",
      name: "Affiliation University ID",
      inputType: "text",
      placeholder: "Affiliation University ID",
    },
    {
      type: "input",
      name: "Founded Year",
      inputType: "number",
      placeholder: "Founded Year",
    },
    {
      type: "input",
      name: "Logo Image URL",
      inputType: "text",
      placeholder: "Logo Image URL",
    },
    {
      type: "input",
      name: "Banner Image URL",
      inputType: "text",
      placeholder: "Banner Image URL",
    },
    {
      type: "input",
      name: "Total Number of Students",
      inputType: "number",
      placeholder: "Total Number of Students",
    },
    {
      type: "input",
      name: "Campus Size",
      inputType: "number",
      placeholder: "Campus Size",
    },
    {
      type: "select",
      name: "UGC Approved",
      options: ["Yes", "No"],
      value: formValues["UGC Approved"] || "",
    },
    {
      type: "input",
      name: "Kapp Ratios",
      inputType: "number",
      placeholder: "Kapp Ratios",
    },
    {
      type: "input",
      name: "Kapp Score",
      inputType: "number",
      placeholder: "Kapp Score",
    },
    {
      type: "input",
      name: "Referer_URL",
      inputType: "text",
      placeholder: "Referer_URL",
    },
    {
      type: "input",
      name: "Nacc Grade",
      inputType: "text",
      placeholder: "Nacc Grade",
    },
    {
      type: "input",
      name: "Slug",
      inputType: "text",
      placeholder: "Slug",
    },
    {
      type: "select",
      name: "Girls Only",
      options: ["Yes", "No"],
      value: formValues["Girls Only"] || "",
    },
    {
      type: "select",
      name: "isUniversity",
      options: ["Yes", "No"],
      value: formValues["isUniversity"] || "",
    },

    {
      type: "select",
      name: "isOnline",
      options: ["Yes", "No"],
      value: formValues["isOnline"] || "",
    },
  ];

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex p-4 sm:p-8 md:p-8">
        <form className="w-full" onSubmit={handleSubmit} onReset={handleReset}>
          <h1 className="text-white font-bold text-3xl mb-8">
            College Information
          </h1>

          <div className="grid grid-cols-4 gap-8 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {fields.map((field, index) => (
              <div className="col-span-1" key={index}>
                {field.type === "input" ? (
                  <Input
                    name={field.name}
                    type={field.inputType || "text"}
                    placeholder={field.placeholder || ""}
                    value={formValues[field.name] || ""}
                    required={field.required}
                    onChange={(e) => {
                      handleInputChange(field.name, e.target.value);
                      if (field.name === "Country")
                        setCountrySearch(e.target.value);
                      if (field.name === "State")
                        setStateSearch(e.target.value);
                      if (field.name === "City") setCitySearch(e.target.value);
                      if (field.name === "Stream")
                        setStreamSearch(e.target.value);
                    }}
                    list={
                      field.dynamicOptions ? `list_${field.name}` : undefined
                    }
                  />
                ) : field.type === "select" ? (
                  <SelectInput
                    name={field.name}
                    options={field.options || []}
                    value={field.value || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                  />
                ) : null}
                {field.dynamicOptions && (
                  <datalist id={`list_${field.name}`}>
                    {field.dynamicOptions.map((option: any, idx: any) => (
                      <option
                        key={idx}
                        value={option.name || option.stream_name}
                      />
                    ))}
                  </datalist>
                )}
              </div>
            ))}
          </div>

          {/* Buttons section */}
          <div className="flex flex-col sm:flex-row gap-2 m-4 w-[30%] sm:w-[90%] md:w-[50%] lg:w-[30%]">
            <Button name="Create College" type="submit" />
            <Button name="Reset" type="reset" />
          </div>
        </form>
      </section>
    </>
  );
}

export default AddCollege;
