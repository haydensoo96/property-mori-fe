import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://propertybe.online/",
});

export const submitForm = async (body) => {
  try {
    const response = await api.post(`form/submit`, body);

    if (response.data.success) {
      toast.success("Form Submitted");
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};
