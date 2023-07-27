//class
class RailwayForm {
    submit() {
        alert("form Submitted");
    }
    cancel() {
        alert("now form is cancelled")
    }
}

let meet = new RailwayForm();
let qaisar = new RailwayForm();

meet.submit();
qaisar.submit();
qaisar.cancel();