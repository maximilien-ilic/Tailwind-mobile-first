/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend:{
      colors:{
        "primary":"#463ADD",
        "secondary":"#EEF1FF",
        "background":"#F9F9FB",
        white:"#FFFFFF",
        "gris":"#F0F0F3",
        "degrader":"#FF00FB",
        "transparent":"#F9F9FB00",
        "gris-foncer":"#E0E1E6",
        "text":"#81828C",
        "widget":"#CDCED6",
        jaune:"#FFFF00",
      },  
      backgroundSize: {
        "200%": "200% 200%",
      },
      keyframes:{
        gradient: {
          "0%": {backgroundPosition:"0% 50%"},  
          "100%": {backgroundPosition:"100% 50%"},  

        }

      },
      animation:{
        gradient:"gradient 6s linear infinite",

      }

    },
  },
  plugins: [],
}

