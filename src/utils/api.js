import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "https://utarcare.online/",
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

export const getAllProperties = async () => {
  try {
    return [];
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    return {};
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const createUser = async (email, token) => {
  try {
    return true;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const bookVisit = async (date, propertyId, email, token) => {
  try {
    return true;
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    return true;
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    return true;
  } catch (e) {
    throw e;
  }
};

export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    return [];
  } catch (e) {
    toast.error("Something went wrong while fetching favs");
    throw e;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    return [];
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error;
  }
};

export const createResidency = async (data, token) => {
  console.log(data);
  try {
    return true;
  } catch (error) {
    throw error;
  }
};
