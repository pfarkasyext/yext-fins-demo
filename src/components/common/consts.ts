import { UniversalLimit } from "@yext/search-headless-react";

//Replace with Your Yext Business ID
export const businessId = 4067217;
//Replace with Your Search Experience API Key
export const apiKey = "52bb27bee04e1f1940659991522dc98d";
//Replace with Your Search Experience experience key
export const experienceKey = "fins_universal-search";
//Replace with Your Search Experience locale
export const locale = "en";
//Replace with Your Search Experience versopm
export const experienceVersion = "PRODUCTION";

export const additionalQueryParams: any = {
      "source": "fins-universal-search"
    };

//set universal result limits for each vertical
export const UNIVERSAL_LIMITS: UniversalLimit = {
  faqs: 5,
  locations: 5,
  financial_professionals: 5,
  financial_products: 5,
  services: 5,
  //add additional vertical limits for universal search below, make sure to assign the correct vertical key
  // vertical2: 5,
  // vertical3: 5
}
