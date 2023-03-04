# user.js | Firefox Fenix Nightly, Iceraven, Fennec F-Droid and Mull

The `user.js` file is used to configure Firefox for android in the safest and fastest way possible.



## Goals:

* enhance security and privacy
* improve performance
* better fingerprint possible
* reduce automatic connections



## Compatible browsers:

This `user.js` has been designed for mobile purposes and you can use it on these browsers:

* [Firefox Fenix Nightly for Android](https://firefox-ci-tc.services.mozilla.com/tasks/index/mobile.v2.fenix.nightly.latest) - Mozilla-mobile
* [Iceraven browser](https://github.com/fork-maintainers/iceraven-browser) - Forks maintainers
* [Fennec F-Droid](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) - F-Droid
* [Mull](https://f-droid.org/en/packages/us.spotco.fennec_dos/) - F-Droid

If you are running IcecatMobile or old Fennec (version 68) use [Quindecim user.js](https://git.nixnet.xyz/quindecim/mobile_user.js) instead.



## How to install:

### **ROOT METHOD 1** *(file manager)*

I would like to suggest the use of [Amaze](https://github.com/TeamAmaze/AmazeFileManager), [Simple File Manager Pro](https://f-droid.org/en/packages/com.simplemobiletools.filemanager.pro/), [Material Files](https://f-droid.org/packages/me.zhanghai.android.files/) or [TWRP File Manager](https://twrp.me/Devices/) before proceed.
- Download and install the browsers from their official websites (see above)
- Start the browser for the first time (offline mode/no data connections) and wait about 5 sec.
- Close it.
- Clone or download zip file and extract it
- Locate browser's installation directory similar to this:

    ✳️ Firefox Fenix Nightly `data/data/org.mozilla.fenix/files/mozilla/[xxxxxxx].default`

    ✳️ Iceraven `data/data/io.github.forkmaintainers.iceraven/files/mozilla/[xxxxxxx].default`

    ✳️ Fennec F-Droid `data/data/org.mozilla.fennec_froid/files/mozilla/[xxxxxxx].default`

    ✳️ Mull `data/data/us.spotco.fennec_dos/files/mozilla/[xxxxxxx].default`


- Copy the extracted `user.js` file to the above installation directory.
- Delete `prefs.js` file inside the above directory
- Start the browser and test if `user.js` was applied :
 browse to `about:config` (put it in search bar) and look if `config.applied` is `true`.

If this doesn't work I suggest you to use the **ROOT METHOD 2** below.

### **ROOT METHOD 2** *(app)*

- Download and install the browser from their official websites.
- Download and install [User.js Updater](https://github.com/v1nc/user.js-updater/releases)
- Start the browser for the first time (offline mode/no data connections) and wait about 5 sec.
- Close it.
- Open `User.js Updater` app and grant storage permission.
- Choose Custom and write the following:

    https://git.nixnet.services/Narsil/mobile_user.js/src/branch/master/user.js

- Tap `UPDATE` at the bottom and grant root permission.
- Start the browser and test if `user.js` was applied :
  browse to `about:config` (put it in search bar) and look if `config.applied` is `true`.
 
- **AFWall+ USERS:** You can disable `Use Download Manager` option into `Settings` and enable data connection just to the app itself.


## Installing Iceraven addons in Fennec/Mull/Firefox Nightly

Go to Settings, about Fennec/Mull/Firefox Nightly, tap 5 times over its logo, Debug mode will enable.
Back to Settings, the new Custom Add-on collection and add the Iceraven one:
16201230
What-I-want-on-Fenix

If you still need more of them you will have to create your own Collection:
https://www.ghacks.net/2020/10/01/you-can-now-install-any-add-on-in-firefox-nightly-for-android-but-it-is-complicated/


## Considerations

Once installed go to Settings, ETP and select Strict.

Some automatic connections could not be blocked so you will have to add them to your host list.

firefox.settings.services.mozilla.com

https://bugzilla.mozilla.org/show_bug.cgi?id=1598562#c13

content-signature-2.cdn.mozilla.net

safebrowsing.googleapis.com, safebrowsing.google.com, malware-error.mozilla.com, phish-error.mozilla.com and developers.google.com (safebrowsing is active and not changeable)

https://github.com/mozilla-mobile/fenix/issues/14163


## Known problems

`Some breakage?`

Try changing "network.http.referer.XOriginPolicy" from 2 to 1

`Performance loss?`

Not active currently, maybe in the future. 
You have to change these strings from false to true:

javascript.options.ion

javascript.options.baselinejit

javascript.options.native_regexp


`Bugs with HTTP sites?`

Due to fission is enabled, HTTP websites don't load when HTTPS only mode is activated . Consider disabling it. There are also issues with self signed certificates in HTTPS webs.



## Thanks

I really thank the following authors:

* [Arkenfox](https://github.com/arkenfox/user.js) - The majority of this user.js.
* [Tor Project](https://www.torproject.org) - Some Tor Browser strings.
* [Quindecim](https://git.nixnet.xyz/quindecim/mobile_user.js) - Initial releases, unique strings and user design.
* [LibreWolf](https://gitlab.com/librewolf-community) - Some strings.
* [Better-Fox](https://github.com/yokoffing/Better-Fox) - Some strings
* [gallegonovato](https://git.nixnet.xyz/gallegonovato) - For his suggestions and support.
* [v1nc](https://github.com/v1nc/) - For his user.js updater app.




## License

GNU General Public License v3.0.

See `LICENSE` for more details.

## Other mirrors

https://codeberg.org/Narsil/user.js/src/branch/main/mobile