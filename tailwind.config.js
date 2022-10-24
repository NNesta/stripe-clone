module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      clipPath: {
        myheader: "polygon(0 0, 0 35%, 86% 0)",
        myfooter: "polygon(0 61%, 100% 40%, 100% 100%, 0% 100%)"
    },
      fontSize:{
        phoneBorderRadius: "36px",
    phoneScreenBorderRadius: "33px",
    phoneWidth: "264px",
    phoneHeight: "533px",
    iconSize: '40px',
    svgSize: '96px',
      },
      colors:
      {
        'accentColor': '#635bff',
        'titleColor': '#0a2540',
        'titleColor-2': '#3a3a3a',
        "textColor": "#425466",
        "backgroundColor": '#f6f9fc',
        'backgroundColorDark':"#0a2540",
        'dark':"#0a2540",
        'accentTeal':"#00d4ff",
      }
    },
  },
  
    plugins: [
      require('tailwind-clip-path'),
    ],
  
}