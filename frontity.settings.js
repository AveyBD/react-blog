const settings = {
  "name": "react-blog",
  "state": {
    "frontity": {
      "url": "https://debashishdab.wordpress.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/twentytwenty-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
        "name": "@frontity/wp-source",
        "state": {
            "source": {
               "api": "https://public-api.wordpress.com/wp/v2/sites/debashishdab.wordpress.com"
             }
         }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
