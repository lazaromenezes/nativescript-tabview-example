var observable = require("data/observable");

var MainViewModel = (function (_super) {

    __extends(MainViewModel, _super);

    function MainViewModel() {
        _super.call(this);
        this.items = [{title: "Item 1"}, {title: "Item 2"}];
        this.username = "Joe";
    }

    return MainViewModel;
    
})(observable.Observable);

exports.MainViewModel = MainViewModel;

exports.mainViewModel = new MainViewModel();
