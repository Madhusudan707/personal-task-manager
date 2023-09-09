import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FlexBoxContainer, Button } from ".";
import { TabProps } from "@/types";
export const Tab: React.FC<TabProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabIds = tabs.map(() => uuidv4());
  return (
    <>
      <FlexBoxContainer className="justify-center flex-col items-center text-4xl p-8 bg-white  w-full">
        <FlexBoxContainer className="gap-x-8">
          {tabs.map((tab, index) => (
            <Button
              key={tabIds[index]}
              label={tab}
              active={index === activeTab}
              onClick={() => setActiveTab(index)}
              variant="primary"
              className={`py-2 px-8 ${
                index === activeTab ? "bg-blue-500 text-white" : "bg-gray-500"
              }`}
            >
              {tab}
            </Button>
          ))}
        </FlexBoxContainer>
        <FlexBoxContainer className=" items-center w-full justify-center py-8">
          {children[activeTab]}
        </FlexBoxContainer>
      </FlexBoxContainer>
    </>
  );
};
