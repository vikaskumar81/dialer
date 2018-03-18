'use strict';

module.exports = function(app) {
    var Option = require('../controller/option.class');
    var User = require('../controller/user.class');
    var Campaign = require('../controller/campaign.class');
    var Message = require('../controller/message.class');
    var Supplier = require('../controller/supplier.class');
  
    // todoList Routes
    app.route('/option/message').get(Option.Message);
    app.route('/option/supplier').get(Option.Supplier);

    app.route('/user')
      .get(User.List)
      .post(User.AddNew);
  
    app.route('/user/:id')
      .get(User.Detail)
      .put(User.Update)
      .delete(User.Delete);
    
    app.route('/campaign')
      .get(Campaign.List)
      .post(Campaign.AddNew);
  
    app.route('/campaign/:id')
      .get(Campaign.Detail)
      .put(Campaign.Update)
      .delete(Campaign.Delete);
    
    app.route('/message')
      .get(Message.List)
      .post(Message.AddNew);
  
    app.route('/message/:id')
      .get(Message.Detail)
      .put(Message.Update)
      .delete(Message.Delete);
    
    app.route('/supplier')
      .get(Supplier.List)
      .post(Supplier.AddNew);
  
    app.route('/supplier/:id')
      .get(Supplier.Detail)
      .put(Supplier.Update)
      .delete(Supplier.Delete);
  };
