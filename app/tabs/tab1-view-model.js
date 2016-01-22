var observable = require("data/observable");

var TabOneViewModel = (function (_super) {

    __extends(TabOneViewModel, _super);

    function TabOneViewModel() {
        _super.call(this);
        this.items = [{title: "Item 3"}, {title: "Item 2"}];
    }

    return TabOneViewModel;

})(observable.Observable);

exports.TabOneViewModel = TabOneViewModel;

exports.viewModel = new TabOneViewModel();
