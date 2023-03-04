## user.js | Firefox, Firefox ESR and Firefox Nightly.
A `user.js` file for configuring and hardening desktop Firefox privacy.

Concretely, this is a fork from the [arkenfox](https://github.com/arkenfox/user.js) project.

Go to arkenfox web page in order to get more information about these changes.


## Goals

* enhance privacy and security
* improve performance
* better fingerprint possible
* reduce automatic connections to the minimum posible

## Considerations

This user.js is a fork from the arkenfox project with a substantial divergence. It tries to avoid all the automatic connections even though security could be reduced slightly.
For instance, OSCP is a privacy breach. Nevertheless, it is also a security feature. This user.js disables them as well as safebrowsing, automatic addons connections and so on. You will have to check manually addons updates in the related preferences section.

However, two connections could not be blocked anymore:

* firefox.settings.services.mozilla.com

https://bugzilla.mozilla.org/show_bug.cgi?id=1598562#c13

* content-signature-2.cdn.mozilla.net

[How to stop Firefox from making automatic connections](https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections)
(Section "Automatic updates and Security/Login breach information")

So you will have to include them to the host list of your OS.


Nevertheless, consider installing Abrowser from Trisquel, Icecat, Iceweasel for Parabola or Librewolf. They lack those connections:

[Abrowser](https://archive.trisquel.info/trisquel/pool/main/f/firefox/?C=S;O=D)

[Icecat for Parabola](https://repomirror.parabola.nu/sources/parabola/)

[Iceweasel](https://repomirror.parabola.nu/sources/parabola/)

[Librewolf](https://librewolf.net/)


On the other hand, if you are using a GNU/Linux distro that connection could be removed unpacking two omni.ja files, removing all the addresses, and then re-zipping the omni.ja files.


`Find your omni.ja files`:

find . -name omni.ja



`Unpack them` (do this for both of them separately):

mkdir unpack

mv omni.ja unpack

cd unpack

unzip omni.ja



`Remove telemetry`:

`find -type f -print0 | xargs -0 sed -i 's/https\:\/\/firefox\.settings\.services\.mozilla\.com\/v1\/buckets\/main\/collections\/nimbus-desktop-experiments\/records//g';
`

`find -type f -print0 | xargs -0 sed -i 's/https\:\/\/firefox\.settings\.services\.mozilla\.com\/v1\/buckets\/main-preview\/collections\/search-config\/records//g';`

`find -type f -print0 | xargs -0 sed -i 's/https\:\/\/firefox\.settings\.services\.mozilla\.com\/v1\/buckets\/main\/collections\/search-config\/records//g';
`

`find -type f -print0 | xargs -0 sed -i 's/https\:\/\/firefox\.settings\.services\.mozilla\.com\/v1//g';
`

`find -type f -print0 | xargs -0 sed -i 's/onecrl\.content-signature\.mozilla\.org//g';
`

`find -type f -print0 | xargs -0 sed -i 's/remote-settings\.content-signature\.mozilla\.org//g';
`

`find -type f -print0 | xargs -0 sed -i 's/normandy\.content-signature\.mozilla\.org//g';
`

`Replace the omni.ja files`:

mv omni.ja back.omni.ja

zip -0DXqr omni.ja *

mv omni.ja .. 


Besides, take into account it makes a connection to aus5.mozilla.org in order to autoupdate itself so you'll also have to add it to your host list.
Alternatively, you could copy the folder `distribution` with the `policies.json` file into your Firefox installation folder. More information about this:

[Customizing firefox using policies.json](https://support.mozilla.org/en-US/kb/customizing-firefox-using-policiesjson)

[DisableAppUpdate](https://github.com/mozilla/policy-templates/blob/master/README.md#disableappupdate)



## Updating addons

Write about:addons

Choose Extensions

Click the icon above on the right (Tools for all add-ons) and Check for updates.

You may also install them manually downloading the respective xpi files.


## Adding new search engines

Follow this guide:

[Add a search engine from the address bar](https://support.mozilla.org/en-US/kb/add-or-remove-search-engine-firefox#w_add-a-search-engine-from-the-address-bar)

Another option could be mycroftproject.com website. Beware! They have embedded Google analytic trackers.


## Known problems

`Some breakage?`

Try changing "network.http.referer.XOriginPolicy" from 2 to 1


`Performance loss?`

Change these strings from false to true:

javascript.options.ion

javascript.options.baselinejit

javascript.options.native_regexp



## Thanks:

I really thank the following authors:

* [Arkenfox](https://github.com/arkenfox/user.js) - The majority of this user.js and updates.
* [Tor Project](https://www.torproject.org) - Some Tor Browser strings.
* [Quindecim](https://git.nixnet.xyz/quindecim/mobile_user.js) - Some unique strings and user design.
* [LibreWolf](https://gitlab.com/librewolf-community) - Some strings.
* [Better-Fox](https://github.com/yokoffing/Better-Fox) - Some strings.
* [Spyware Watchdog](https://spyware.neocities.org/) - Mozilla Firefox Spyware Mitigation Guide (Archive.org) and Tor Browser mitigation guide.

## License

GNU General Public License v3.0.

See `LICENSE` for more details.

## Other mirrors

https://codeberg.org/Narsil/user.js/src/branch/main/desktop