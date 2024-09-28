import { ChatConfig } from "@yext/chat-headless-react";
import { SearchConfig } from "@yext/search-headless-react";

export const searchConfig: SearchConfig = {
  apiKey: YEXT_PUBLIC_SEARCH_APIKEY,
  experienceKey: YEXT_PUBLIC_SEARCH_EXPKEY,
  locale: "en",
};

// export const chatConfig: ChatConfig = {
//   apiKey: YEXT_PUBLIC_CHAT_APIKEY,
//   botId: YEXT_PUBLIC_CHAT_BOTKEY,
// };
