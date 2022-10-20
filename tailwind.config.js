module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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
        "textColor": "#425466",
        "backgroundColor": '#f6f9fc',
        'backgroundColorDark':"#0a2540",
      }
    },
  },
  plugins: [],
}