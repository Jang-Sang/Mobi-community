import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SSTab = () => {
  return (
    <Tabs
      variant="unstyled"
      css={css`
        border-bottom: 2px solid white;
      `}
    >
      <TabList>
        <Tab _selected={{ color: "white", bg: "blue.500" }}>본명</Tab>
        <Tab _selected={{ color: "white", bg: "green.400" }}>출생</Tab>
        <Tab _selected={{ color: "white", bg: "yellow.400" }}>본관</Tab>
        <Tab _selected={{ color: "white", bg: "red.400" }}>신체</Tab>
      </TabList>
      <hr
        css={css`
          height: 2px;
          background-color: white;
          border: 0;
        `}
      ></hr>
      <TabPanels
        css={css`
          color: white;
        `}
      >
        <TabPanel>
          <p>안유진 (安兪眞[훈음], An Yujin, アン・ユジン)</p>
        </TabPanel>
        <TabPanel>
          <p>2003년 9월 1일 (20세) 대전광역시 서구 둔산동</p>
        </TabPanel>
        <TabPanel>
          <p>순흥 안씨 (順興 安氏)</p>
        </TabPanel>
        <TabPanel>
          <p>173cm｜A형｜250mm</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default SSTab;
