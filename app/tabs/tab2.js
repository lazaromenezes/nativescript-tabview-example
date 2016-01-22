var vmModule = require("./tab2-view-model");

function tabTwoLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.viewModel;
}

exports.tabTwoLoaded = tabTwoLoaded;
