var observable = require("data/observable");

var TabTwoViewModel = (function (_super) {

    __extends(TabTwoViewModel, _super);

    function TabTwoViewModel() {
        _super.call(this);
        this.username = "Joe";
    }

    return TabTwoViewModel;

})(observable.Observable);

exports.TabTwoViewModel = TabTwoViewModel;

exports.viewModel = new TabTwoViewModel();
