var observable = require("data/observable");

var MainViewModel = (function (_super) {

    __extends(MainViewModel, _super);

    function MainViewModel() {
        _super.call(this);
    }

    return MainViewModel;

})(observable.Observable);

exports.MainViewModel = MainViewModel;

exports.mainViewModel = new MainViewModel();
