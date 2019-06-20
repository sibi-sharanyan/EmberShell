import Component from "@ember/component";

export default Component.extend({
  init() {
    this._super(...arguments);
    $.ajax("/processapp/remoterec?order=ascending&col=cpu&pname=allproc").then(
      data => {
        var allproc = [];
        for (var i = 0; i < data.data.length; i++) {
          allproc.push(data.data[i]);
        }
        this.set("col", "CPU");
        this.set("order", "ascending");
        this.set("clickorder", "ascending");
        this.set("pname", "allproc");
        this.set("arrayOfProc1", allproc);
      }
    );
  },
  actions: {
    doneclick(col, pname) {
      if (pname == "" || pname == "*") pname = "allproc";

      var ord;
      if (this.get("clickorder") == "ascending") {
        ord = "descending";
        this.set("clickorder", "descending");
      } else {
        ord = "ascending";
        this.set("clickorder", "ascending");
      }

      var urlval =
        "/processapp/remoterec?order=" +
        ord +
        "&col=" +
        col +
        "&pname=" +
        pname;
      $.ajax(urlval).then(data => {
        var allproc = [];
        for (var i = 0; i < data.data.length; i++) {
          allproc.push(data.data[i]);
        }

        this.set("arrayOfProc1", allproc);
      });
    },
    setcol(col) {
      $("#col").text(col);
      this.set("col", col);
    },
    setord(order) {
      this.set("order", order);
      $("#order").text(order);
    },
    search(pname) {
      if (pname == "" || pname == "*") pname = "allproc";
      var col = this.get("col");
      var order = this.get("order");
      var urlval =
        "/processapp/remoterec?order=" +
        order +
        "&col=" +
        col +
        "&pname=" +
        pname;

      $.ajax(urlval).then(data => {
        var allproc = [];
        for (var i = 0; i < data.data.length; i++) {
          allproc.push(data.data[i]);
        }

        this.set("arrayOfProc1", allproc);
      });
    },
    moreinfo(id) {
      $.ajax("/processapp/moreinfo?id=" + id).then(data => {
        swal(
          "Process Id: " + id,
          "TotalProcessorTime:   " +
            data.data.TotalProcessorTime +
            "\n\n" +
            "StartTime:   " +
            data.data.StartTime +
            "\n\n FileVersion:   " +
            data.data.FileVersion +
            "\n\n Path:   " +
            data.data.Path +
            "\n\n MainModule:   " +
            data.data.MainModule +
            "\n\n Company:   " +
            data.data.Company,
          "info"
        );
      });
    }
  }
});
