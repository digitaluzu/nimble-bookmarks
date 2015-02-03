/* jshint unused: true, undef: true */
/* global window, document, alert, localStorage, $, chrome */

window.addEventListener('load', init, false);

function init() {
    // i18n of text strings
    $('extName').innerHTML = chrome.i18n.getMessage('extName');
    $('version').innerHTML = chrome.app.getDetails().version; // undocumented method!
    $('options').innerHTML = chrome.i18n.getMessage('options');
    $('generalSettings').innerHTML = chrome.i18n.getMessage('generalSettings');
    $('optionClickNewTab').innerHTML = chrome.i18n.getMessage('optionClickNewTab');
    $('optionCloseUnusedFolders').innerHTML = chrome.i18n.getMessage('optionCloseUnusedFolders');
    $('optionConfirmOpenFolder').innerHTML = chrome.i18n.getMessage('optionConfirmOpenFolder');
    $('optionRememberPrevState').innerHTML = chrome.i18n.getMessage('optionRememberPrevState');
    $('resetSettings').innerHTML = chrome.i18n.getMessage('resetSettings');

    var extName = chrome.i18n.getMessage('extName');

    $('resetTextHotkey').innerHTML = chrome.i18n.getMessage('resetTextHotkey', [extName]);
    $('resetHotkey').innerHTML = chrome.i18n.getMessage('reset');
    $('resetTextAll').innerHTML = chrome.i18n.getMessage('resetTextAll', [extName]);
    $('resetAll').innerHTML = chrome.i18n.getMessage('reset');

    $('optionsFooterTextHomepage').innerHTML = chrome.i18n.getMessage('optionsFooterTextHomepage', [extName]);
    $('optionsFooterTextHomepageURL').innerHTML = '<a href="https://github.com/digitaluzu/nimble-bookmarks">https://github.com/digitaluzu/nimble-bookmarks</a>';

    $('optionsFooterTextIssues').innerHTML = chrome.i18n.getMessage('optionsFooterTextIssues');
    $('optionsFooterTextIssuesURL').innerHTML = '<a href="https://github.com/digitaluzu/nimble-bookmarks/issues">https://github.com/digitaluzu/nimble-bookmarks/issues</a>';
}

var _m = chrome.i18n.getMessage;

document.addEventListener('DOMContentLoaded', function() {
    document.title = _m('extName') + ' ' + _m('options');

    var clickNewTab = $('click-new-tab');
    clickNewTab.checked = !!localStorage.leftClickNewTab;
    clickNewTab.addEventListener('change', function() {
        localStorage.leftClickNewTab = clickNewTab.checked ? '1' : '';
    });

    var closeUnusedFolders = $('close-unused-folders');
    closeUnusedFolders.checked = !!localStorage.closeUnusedFolders;
    closeUnusedFolders.addEventListener('change', function() {
        localStorage.closeUnusedFolders = closeUnusedFolders.checked ? '1' : '';
    });

    var confirmOpenFolder = $('confirm-open-folder');
    confirmOpenFolder.checked = !localStorage.dontConfirmOpenFolder;
    confirmOpenFolder.addEventListener('change', function() {
        localStorage.dontConfirmOpenFolder = confirmOpenFolder.checked ? '' : '1';
    });

    var rememberPrevState = $('remember-prev-state');
    rememberPrevState.checked = !localStorage.dontRememberState;
    rememberPrevState.addEventListener('change', function() {
        localStorage.dontRememberState = rememberPrevState.checked ? '' : '1';
    });

    $('reset-hotkey-button').addEventListener('click', function() {
        localStorage.removeItem('hotkeys');
    }, false);

    $('reset-all-button').addEventListener('click', function() {
        localStorage.clear();
        window.location.reload();
    }, false);
});

document.addEventListener('DOMContentLoaded', function() {
    // check if options can be saved locally
    if (window.localStorage === null) {
        alert("LocalStorage must be enabled for managing options.");
        return;
    }
});
