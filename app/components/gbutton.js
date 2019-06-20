import Component from "@ember/component";

export default Component.extend({
  actions: {
    getdetails() {
      // window.open("http://localhost:8080/app1/authapp");

      $.ajax({
        url:
          "https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fadmin.directory.user&client_id=217630493689-jpjd043miq47ekrlop431t3k854mpf59.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Foauth2callback&response_type=code",
        crossDomain: true
      }).then(data => {
        var mydata = JSON.parse(data);
        alert(data);
      });
    }
  }
});
