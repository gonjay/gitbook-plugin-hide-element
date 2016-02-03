require(['gitbook', 'lodash'], function(gitbook, _) {
    var opts;
    
    gitbook.events.bind('start', function(e, config) {
        opts = config['hide-element'].elements;
    });


    gitbook.events.bind('page.change', function() {
        _.map(opts, function(ele){
            $(ele).hide();
        });
    });
});
