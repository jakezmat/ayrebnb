'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("SpotImages",[
    {
      spotId:1,
      url:"https://images.unsplash.com/photo-1597211833712-5e41faa202ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
      preview:true
    },
    {
      spotId:1,
      url:"https://images.unsplash.com/photo-1543489822-c49534f3271f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      preview:false
    },
    {
      spotId:1,
      url:"https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      preview:false
    },
    {
      spotId:1,
      url:"https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      preview:false
    },
    {
      spotId:1,
      url:"https://images.unsplash.com/photo-1562438668-bcf0ca6578f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      preview:false
    },
    {
      spotId:2,
      url:"https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      preview:true
    },
    {
      spotId:2,
      url:"https://images.unsplash.com/photo-1625647999883-376f8f48c52a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
      preview:false
    },
    {
      spotId:2,
      url:"https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      preview:false
    },
    {
      spotId:2,
      url:"https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      preview:false
    },
    {
      spotId:2,
      url:"https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      preview:false
    },
    {
      spotId:3,
      url:"https://mediacloud.theweek.com/image/upload/f_auto,t_content-image-desktop@1/v1645734537/TWS1068.props.sherman.ext.jpg",
      preview:true
    },
    {
      spotId:3,
      url:"https://plus.unsplash.com/premium_photo-1661950439212-558fa5cc82e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1151&q=80",
      preview:false
    },
    {
      spotId:3,
      url:"",
      preview:false
    },
    {
      spotId:3,
      url:"",
      preview:false
    },
    {
      spotId:3,
      url:"",
      preview:false
    },

   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("SpotImages")
  }
};
