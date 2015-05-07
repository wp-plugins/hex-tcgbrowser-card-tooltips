=== Hex TCGBrowser Card Tooltips ===
Contributors: bogycoins
Tags: hex, tcg, tcgbrowser, cards, tooltips
Requires at least: 2.8.6
Tested up to: 4.2.2
Stable tag: 1.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Transform Hex TCG card names into links that show the card image when hovering over them.

== Description ==

The plugin adds a button in the visual post editor. To use it, just select the text that
represents a Hex TCG card name, and click the button. It will turn the text into a
link to the card's page on http://hex.tcgbrowser.com. Note that the tooltips will work only after
you publish or preview the post.

== Installation ==

Option 1:
1. Go to "Install Plugins" section of the Admin Panel, select "Add New" and then the "Upload" link
    to install the zip file.
2. Activate the plugin.
3. Use the "Hex" button in the editor.

Option 2:
Alternatively, you can search for "Hex TCGBrowser" from the Admin panel Plugins section, select this
plugin and click 'Install'.

== Screenshots ==

1. Select a card name and click on Hex button

2. An example of the generated tooltip.

== Changelog ==

= 1.6 =
* Supports Wordpress 4.2.2

= 1.5 =
Added support for different cards with the same name.

Usage:
To display the AA version of a card, add '-AA' at the end. For troop/champion/mercenary, add '-Troop', '-Champion' or '-Mercenary'.

The plugin will remove the suffix, but the correct card will still be linked.

E.g.

Burn-AA

Living Totem-AA

Zoltog-Mercenary

Zoltog-Champion

Zoltog-Troop


Note: If no suffix is added for a card that exists both as Troop and other type like Mercenary or Champion, the troop version will be selected.

= 1.4 =
* Supports Wordpress 4.1.1

= 1.3 =
* Supports Wordpress 4.0

= 1.2 =
* Updated tooltip location

= 1.1 =
* Link to database site is now added when the text is transformed

= 1.0 =
* Initial release



