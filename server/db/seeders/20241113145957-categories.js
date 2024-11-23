
// 'use strict';
// const categories = require('../models/Categories');


// module.exports = {
//   up: (models, mongoose) => {

//       return models.categories.insertMany([
//         {
//           category:"Eyeglasses",
//           _id:"6734c1a96a8936054cb87ec8",

//           categorySchemaSubcategory : [
//             {
//               gender : "Men",
//               _id : "674161f5931792fe2a5d7a87"
//             },
//             {

//               gender : "Women",
//               _id : "674162c8931792fe2a5d7a88"

//             },
//             {
//               gender : "Kids",
//               _id : "674162ec931792fe2a5d7a89"
//             }


//           ]

//         },
//         {
//           category : "Screen Glasses",
//           _id : "6734cba46a8936054cb87ecb",

//           categorySchemaSubcategory : [
//             {
//               gender : "Men",
//               _id : "674161f5931792fe2a5d7a87"
//             },
//             {

//               gender : "Women",
//               _id : "674162c8931792fe2a5d7a88"

//             },
//             {
//               gender : "Kids",
//               _id : "674162ec931792fe2a5d7a89"
//             }


//           ]

//         },
//         {
//           category : "Kids Glasses",
//           _id : "6734cc686a8936054cb87ecc"
//         },
//         {
//           category : "Contact Lenses",
//           _id : "6734cca16a8936054cb87ecd"

//         },
//         {
//           category : "Sunglasses",
//           _id : "6734ce466a8936054cb87ece",
//           categorySchemaSubcategory : [
//             {
//               gender : "Men",
//               _id : "674161f5931792fe2a5d7a87"
//             },
//             {

//               gender : "Women",
//               _id : "674162c8931792fe2a5d7a88"

//             },


//           ]
//         }
//       ]).then(res => {
//       // Prints "1"
//       console.log(res.insertedCount);
//     });

//   },

//   down: (models, mongoose) => {

//       return models.categories.deleteMany({
//         _id : {
//           $in :[
//             "6734c1a96a8936054cb87ec8",
//             "6734cba46a8936054cb87ecb",
//             "6734cc686a8936054cb87ecc",
//             "6734cca16a8936054cb87ecd",
//             "6734ce466a8936054cb87ece"
//           ]
//         }

//       }).then(res => {
//       // Prints "1"
//       console.log(res.deletedCount);
//       });

//   }
// };


'use strict';
const Categories = require('../models/Categories'); // Assuming Categories model is exported from this path

module.exports = {
  up: (models, mongoose) => {
    return models.Categories.insertMany([
      {
        category: "Eyeglasses",
        _id: "6734c1a96a8936054cb87ec8",
        categorySchemaSubcategory: [
          {
            gender: "Men",
            _id: "674161f5931792fe2a5d7a87",
            thirdSchemaSubcategory: [
              { type: "CLASSIC EYEGLASSES", _id: "67416b0a1aee3d9e8f894d82" },
              { type: "PREMIUM EYEGLASSES", _id: "67416b1b1aee3d9e8f894d83" },
              { type: "SCREEN EYEGLASSES", _id: "67416b591aee3d9e8f894d84" }
            ]
          },
          { gender: "Women", _id: "674162c8931792fe2a5d7a88" },
          { gender: "Kids", _id: "674162ec931792fe2a5d7a89" }
        ],

      },
      {
        category: "Screen Glasses",
        _id: "6734cba46a8936054cb87ecb",
        categorySchemaSubcategory: [
          { gender: "Men", _id: "674161f5931792fe2a5d7a87" },
          { gender: "Women", _id: "674162c8931792fe2a5d7a88" },
          { gender: "Kids", _id: "674162ec931792fe2a5d7a89" }
        ]
      },
      {
        category: "Kids Glasses",
        _id: "6734cc686a8936054cb87ecc"
      },
      {
        category: "Contact Lenses",
        _id: "6734cca16a8936054cb87ecd"
      },
      {
        category: "Sunglasses",
        _id: "6734ce466a8936054cb87ece",
        categorySchemaSubcategory: [
          { gender: "Men", _id: "674161f5931792fe2a5d7a87" },
          { gender: "Women", _id: "674162c8931792fe2a5d7a88" }
        ]
      }
    ]).then(res => {
      console.log(res.insertedCount);  // Will print number of inserted records
    });
  },

  down: (models, mongoose) => {
    return models.Categories.deleteMany({
      _id: {
        $in: [
          "6734c1a96a8936054cb87ec8",
          "6734cba46a8936054cb87ecb",
          "6734cc686a8936054cb87ecc",
          "6734cca16a8936054cb87ecd",
          "6734ce466a8936054cb87ece"
        ]
      }
    }).then(res => {
      console.log(res.deletedCount);  // Will print number of deleted records
    });
  }
};
