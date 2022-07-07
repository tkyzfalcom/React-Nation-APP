import React, { useEffect, useState } from "react";
import { Routes } from "./src/routes";
import AnimatedSplash from "react-native-animated-splash-screen";
import Logo from './src/assets/images/Hondo_Ohnaka_pirate_symbol.webp';
import { ProvedorLogin } from "./src/context/LoginContext";

const App = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000)
    });
  return(
    <AnimatedSplash
                translucent={true}
                isLoaded={isLoaded}
                logoImage={Logo}
                backgroundColor={"#262626"}
                logoHeight={150}
                logoWidth={150}
            >
             <ProvedorLogin>
              <Routes/>
             </ProvedorLogin> 
  </AnimatedSplash>
  )
}

export default App;
