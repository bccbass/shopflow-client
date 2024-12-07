// import dotenv from 'dotenv';
// dotenv.config()


const url = import.meta.env.VITE_SHOPFLOW_API
// const url = "https://shopflow-api.onrender.com"
export const getResource = async (route) => {
    try {
      console.log(url);
      const resource = await fetch(`${url}/${route}`);
      if (!resource.ok){ throw new Error(`Response status: ${resource.status}`); }
      const json = await resource.json();
      return json 
    } catch (err) {
      console.error(err);
    }
  };

