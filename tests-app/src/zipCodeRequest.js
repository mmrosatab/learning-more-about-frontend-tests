import axios from "axios";

const fetchData = async (zipCode) => {
  try {
    const response = await axios.get(
      `https://viacep.com.br/ws/${zipCode}/json`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
