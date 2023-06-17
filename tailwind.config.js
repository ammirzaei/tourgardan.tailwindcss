module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'isw' : ['isw','tahoma']
      },
      colors : {
          green : {
            1 : '#cceda6',
            2 : '#8bc34a',
            3 : '#39b54a',
          },
          black : {
            1 : '#000',
            2 : '#333'
          },
          red : {
            1 : '#e80872',
          },
          gray : {
            1 : '#f3f3f3',
            2 : '#dcdcdc',
            3 : '#888',
            4 : '#777',
            5 : '#666',
            6 : '#4c4c4c',
          }
      }
    },
  },
  plugins: [],
}

