
import './App.css'
import { useTranslation, } from "react-i18next"; // hook for using i18n


function App() {


    //  Destructure useTranslation hook
  // t = function to translate text

  const { t } = useTranslation()

  

 return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f0f8ff"
      }}
    >
      {/* Text automatically changes based on browser language */}
      <h1 style={{ color: "#0077cc" }}>{t("welcome")}</h1>
      <p style={{ fontSize: "18px", color: "#333" }}>{t("about")}</p>
    </div>
  );
}

export default App
