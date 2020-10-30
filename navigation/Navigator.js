import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { TabRouter } from "./Router";
import { View } from "react-native";
import {LevelOneStack, AuthStacks, AppStack } from "./Stack";
import { TabButtom } from "./Tab";


export const Navigator = () => {
  const [visibale, setvisibale] = React.useState(false)
  React.useEffect(() => {
    setTimeout(()=>{
setvisibale(true)
    },3000)
  }, [])
  return (
   
      <NavigationContainer>
          
          
        {!visibale &&  <AuthStacks />}
          {visibale && (
              <LevelOneStack />
          )}
          
          </NavigationContainer>

  );
};
