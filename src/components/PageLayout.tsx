import Header from "./Header";
import Footer from "./Footer";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages-components";
import { TemplateProps } from "@yext/pages";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import { chatConfig, searchConfig } from "./config";
import { ChatHeadlessProvider } from "@yext/chat-headless-react";
import { ChatPanel, ChatHeader } from "@yext/chat-ui-react";
 import { useState } from "react";
import { IoChatbubblesSharp, IoCaretDownOutline } from "react-icons/io5";

export interface PageLayoutProps {
  children?: React.ReactNode;
  templateData: TemplateProps;
}

const PageLayout = ({ children, templateData }: PageLayoutProps) => {
  const [showChat, setShowChat] = useState(false);
  return (
    <SearchHeadlessProvider searcher={provideHeadless(searchConfig)}>
      <AnalyticsProvider
        templateData={templateData}
        apiKey={YEXT_PUBLIC_ANALYTICS_API_KEY}
        currency={"USD"}
      >
        <div className={"mx-auto w-full min-h-screen"}>
          <AnalyticsScopeProvider name="header">
            <Header _site={templateData.document._site} />
          </AnalyticsScopeProvider>
          {children}
          <AnalyticsScopeProvider name="footer">
            <Footer _site={templateData.document._site} />
          </AnalyticsScopeProvider>
          {showChat && (
            <div
              className="w-[400px]  mb-8"
              style={{ bottom: "60px", right: "30px", position: "fixed" }}
            >
              <ChatHeadlessProvider config={chatConfig}>
                <ChatPanel
                  customCssClasses={{
                    container: "h-[500px] overflow-scroll",
                    inputCssClasses: {
                      sendButton: " !hover:bg-blue-700 !bg-blue-950",
                    },
                  }}
                  messageSuggestions={[
                    "Banks in Charlotte, NC",
                    "ATMs in Chicago",
                    "I'm looking for help finding an advisor",
                    "What are Capital’s credit card options?",
                    "What are my mobile banking options?",
                    "Can Capital help me with buying a house?",
                  ]}
                  header={
                    <ChatHeader
                      title={"Capital Bank Chat"}
                      showRestartButton={true}
                      customCssClasses={{
                        container: "!bg-none !bg-blue-950 text-white",
                      }}
                    ></ChatHeader>
                  }
                />
              </ChatHeadlessProvider>
            </div>
          )}
          <div
            className="bg-brand-primary p-4 rounded-full"
            style={{ position: "fixed", bottom: "20px", right: "20px" }}
          >
            {!showChat ? (
              <IoChatbubblesSharp
                className="text-white"
                onClick={() => setShowChat(!showChat)}
                style={{
                  fontSize: "1.875rem",
                  lineHeight: "2.25rem",
                }}
              />
            ) : (
              <IoCaretDownOutline
                onClick={() => setShowChat(!showChat)}
                className="text-white"
                style={{
                  fontSize: "1.875rem",
                  lineHeight: "2.25rem",
                }}
              />
            )}
          </div>
        </div>
      </AnalyticsProvider>
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
