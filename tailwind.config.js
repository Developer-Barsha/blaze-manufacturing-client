module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'developer': "url('https://i.ibb.co/kDSCZ9G/Developer-2.gif')",
        'language': "url('https://i.ibb.co/PCpvy4m/Developer-1.gif')"
      }
    }
  },
  plugins: [require("daisyui")],
 }
 