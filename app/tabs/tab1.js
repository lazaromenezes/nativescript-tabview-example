var vmModule = require("./tab1-view-model");

function tabOneLoaded(args) {
    var page = args.object;
    page.bindingContext = vmModule.viewModel;
}

exports.tabOneLoaded = tabOneLoaded;
