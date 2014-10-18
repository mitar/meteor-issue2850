if (Meteor.isClient) {
  $(document).on('click', function (event) {
    console.log("document level", event);
  });

  Template.loginButtons.events({
    'click': function (event, template) {
      console.log("template level", event);
    }
  });
}
