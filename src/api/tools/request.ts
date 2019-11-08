import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Word } from '../types/types';

export default class Api {
   /**
    * Axios request wrapper with error handling.
    * @param options Axios request options, example: {url: "search/users"}
    * @param showAlertOnError Shows a native alert to the user when the request has a network error
    * @returns When there is an error in the request returns null, error handling is managed inside this function.
    */
   public static async request<T>(options: AxiosRequestConfig, showAlertOnError: boolean = true): Promise<T | null> {
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

            return Promise.resolve(error.response || null);
         });
   }

   static async requestSynonyms(textToSearch: string): Promise<string[] | null> {
      const result: Word[] = await Api.request({ url: `words?ml=${textToSearch}` });
      if (result == null) {
         return Promise.resolve(null);
      }
      return Promise.resolve(result.map((x: Word) => x.word));
   }
}