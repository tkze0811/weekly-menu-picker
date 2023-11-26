import React from "react";
import { WeeklyMenuScreen } from "./screens/weeklyMenuScreen";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100%;
`;

export const App = () => {
  return (
    <AppContainer className="App">
      <WeeklyMenuScreen />
    </AppContainer>
  );
};
