import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export default class Api {
   public static baseURL: string = 'https://api.datamuse.com/words?ml=';

   /**
    * Axios request wrapper with error handling.
    * @param options Axios request options, example: {url: "search/users"}
    * @param showAlertOnError Shows a native alert to the user when the request has a network error
    * @returns When there is an error in the request returns a string resolved promise with the error text.
    */
   public static async request<T>(options: AxiosRequestConfig, showAlertOnError: boolean = true): Promise<T | string> {
      const client: AxiosInstance = axios.create({
         baseURL: process.env.API_BASE_URL,
      });

      return client(options)
         .then(response => {
            return response.data;
         })
         .catch(error => {
            console.debug("Request Failed:", error.config);

            if (error.response) {
               // Request was made but server responded with something
               // other than 2xx
               console.debug("Status:", error.response.status);
               console.debug("Data:", error.response.data);
               console.debug("Headers:", error.response.headers);

               if (showAlertOnError) {
                  alert(`Error ${error.response.status} ${error.response || error.message}`);
               }
            } else {
               // Something else happened while setting up the request
               // triggered the error
               console.debug('Error Message:', error.message);

               if (showAlertOnError) {
                  alert('Connection problem');
               }
            }

            return Promise.resolve(error.response || error.message);
         });
   }
}