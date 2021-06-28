import React, { useState } from "react";
import Tab from "../components/Tab";
import Home from "../components/Home";
import styled from "../styles/themed-components";
import Channel from "../components/Channel";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.baseBlack};
`;

const TopSection = styled.section`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.baseBlack};
`;

const TopLabel = styled.span`
  font-weight: 900;
  color: ${({ theme }) => theme.color.labelGrey};
  margin-left: 15px;
`;

const ContentsSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const TabPannel = styled.nav`
  width: 5.5%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Pages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Main: React.FC = () => {
  const [curTab, setCurTab] = useState<number>(-1);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const tabHandler = (id: number) => {
    setCurTab(id);
  };

  const addHandler = (state: boolean) => {
    setIsAdd(state);
  };
  return (
    <Container>
      <TopSection>
        <TopLabel>GESCORD</TopLabel>
      </TopSection>
      <ContentsSection>
        <TabPannel>
          <Tab
            curTab={curTab}
            tabHandler={tabHandler}
            isAdd={isAdd}
            isAddHandler={addHandler}
          />
        </TabPannel>
        <Pages>{curTab === -1 ? <Home /> : <Channel tabId={curTab} />}</Pages>
      </ContentsSection>
    </Container>
  );
};

export default Main;
