(function () {
    tinymce.create('tinymce.plugins.HexTCGBrowserPlugin', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init: function (ed, url) {
            ed.addButton('hex_tcgbrowser', {
                title: 'Hex Card',
                image: url + '/../../images/hex.png',
                onclick: function () {
                    var txt = ed.dom.decode(ed.selection.getContent());
                    var decode = txt.match(/(.+)(-)(Champion|Mercenary|Troop|AA)$/i);
                    var cardname = txt,
                        extra = "";

                    if(decode && typeof decode == "object" && decode[3]){ //typof object
                        cardname = decode[1];
                        extra =  "-" + decode[3];
                    }

                    ed.selection.setContent('<a target="_blank" href="http://hex.tcgbrowser.com/card/'+ cardname + extra +'">' + cardname + '</a>');
                    ed.save();
                    ed.isNotDirty = true;
                }
            });
        },

        /**
         * Creates control instances based in the incomming name. This method is normally not
         * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
         * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
         * method can be used to create those.
         *
         * @param {String} n Name of the control to create.
         * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
         * @return {tinymce.ui.Control} New control instance or null if no control was created.
         */
        createControl: function (n, cm) {
            return null;
        },

        /**
         * Returns information about the plugin as a name/value array.
         * The current keys are longname, author, authorurl, infourl and version.
         *
         * @return {Object} Name/value array containing information about the plugin.
         */
        getInfo: function () {
            return {
                longname: "Hex TCGBrowser Card Tooltips",
                author: 'bogycoins',
                authorurl: 'http://hex.tcgbrowser.com',
                infourl: 'http://wordpress.org/plugins/hex-tcgbrowser-card-tooltips/',
                version: "1.6"
            };
        }
    });

    // Register plugin
    tinymce.PluginManager.add('hex_tcgbrowser', tinymce.plugins.HexTCGBrowserPlugin);
})();
