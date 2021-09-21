import axios from 'axios';

const URL =
   'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
const options = {
   params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
   },
   headers: {
      'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      'x-rapidapi-key': '8aa1d8a563msh5ea0a3fa84e50cap127e58jsnd4d0e31ae209',
   },
};

export const getPlacesData = async () => {
   try {
      const {
         data: { data },
      } = await axios.get(URL, options);

      return data;
      //request
   } catch (error) {
      console.log(error);
   }
};
