import { HexColor } from "@yext/studio";
import Footer from "../starter/Footer";
import ComplexHeader from "./ComplexHeader";
import {
  ChatHeadlessProvider,
  HeadlessConfig,
} from "@yext/chat-headless-react";
import { IoChatbubblesSharp, IoCaretDownOutline } from "react-icons/io5";
import { useState } from "react";
import { ChatHeader, ChatPanel } from "@yext/chat-ui-react";
import "@yext/chat-ui-react/bundle.css";

export interface PageLayoutProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  containerClassName?: string;
  _site?: any;
}

const config: HeadlessConfig = {
  botId: "capital-chat",
  apiKey: "faa7e213d8d005f7dd0f56d9111d9261",
};

const PageLayout = ({
  children,
  backgroundColor,
  containerClassName,
  _site,
}: PageLayoutProps) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div
      className={`min-h-screen relative flex flex-col justify-between`}
      style={{ backgroundColor }}
    >
      <ComplexHeader data={_site} />
      <main className={containerClassName}>{children}</main>
      <Footer />
      
      {showChat && (
        <div
          className="w-[400px]  mb-8"
          style={{ bottom: "60px", right: "30px", position: "fixed" }}
        >
          <ChatHeadlessProvider config={config}>
            <ChatPanel
              customCssClasses={{
                container: "h-[400px] overflow-scroll",
                inputCssClasses: {
                  sendButton: " !hover:bg-blue-700 !bg-blue-950",
                },
              }}
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
      <div className="bg-brand-secondary p-4 rounded-full" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
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
  );
};

export default PageLayout;
