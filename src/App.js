// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AppRouter from "./router/AppRouter";
// import { blueGrey, red } from "@mui/material/colors";

// import { ToastContainer } from "react-toastify";
// import FloatingButtons from "./components/FloatingButtons";

// function App() {
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: red["700"],
//       },
//       secondary: {
//         main: blueGrey["900"],
//       },
//     },
//   });
//   return (
//     <>
//       <ThemeProvider theme={theme}>    
            
         
//           <AppRouter />
//           <FloatingButtons />
//            <ToastContainer />
           
            
//        <ThemeProvider/>
    
//      </>
//   );
// }

// export default App;


import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { blueGrey, red } from "@mui/material/colors";

import { ToastContainer } from "react-toastify";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: red["700"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
      <FloatingButtons />
      <ToastContainer />
    </ThemeProvider> // ❗️Kapatma etiketi düzeltildi
  );
}

export default App;
