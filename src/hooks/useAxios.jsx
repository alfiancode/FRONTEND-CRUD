import axios from "axios";

const UseAxios = async (url) => {
  try {
    const respone = await axios.get(url).then((res) => res.data);
    return await respone;
  } catch (error) {
    console.log(error);
  }
};

export default UseAxios;
