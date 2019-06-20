import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    $.ajax("/processapp/records").then(data => {
      var allproc = [];
      for (var i = 0; i < data.data.length; i++) {
        allproc.push(data.data[i]);
      }

      this.set("arrayOfProc", allproc);
    });
  },
  actions: {
    search(searchdata) {
      $.ajax("/processapp/records").then(data => {
        var allproc = [];
        for (var i = 0; i < data.data.length; i++) {
          if (data.data[i].ProcessName == searchdata || searchdata == "")
            allproc.push(data.data[i]);
        }

        this.set("arrayOfProc", allproc);
      });
    },
    getMore(id) {
      $.ajax("/processapp/singrec?id=" + id).then(data => {
        alert(
          "CPU: " +
            data.data[0].cpu +
            "\nTotal Processor Time: " +
            data.data[0].tpt +
            "\nSafe Handle: " +
            data.data[0].sh
        );
      });
    }
  }
});
