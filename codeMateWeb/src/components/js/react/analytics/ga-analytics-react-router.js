/*

How to add Google Analytics for React Router?
    Add a listener on the history object to record each page view:

    history.listen(function (location) {
        window.ga('set', 'page', location.pathname + location.search)
        window.ga('send', 'pageview', location.pathname + location.search)
    })

*/