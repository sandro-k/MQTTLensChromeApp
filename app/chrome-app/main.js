/**
 * Created by sandro on 11.08.14.
 */
/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/apps/app.runtime.html
 * @see http://developer.chrome.com/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function () {
    // Center window on screen.
    var screenWidth = screen.availWidth;
    var screenHeight = screen.availHeight;
    // TODO sandro-k load last saved configuration from storage
    var width = 1200;
    var height = 800;

    chrome.app.window.create('build.html', {

        // center the app
        bounds: {
            width: width,
            height: height,
            left: Math.round((screenWidth - width) / 2),
            top: Math.round((screenHeight - height) / 2)
        }
    });
});

document.addEventListener('readystatechange', function (e) {

}, false);
