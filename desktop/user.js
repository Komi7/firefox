// **********************************************************************************
// user.js | Firefox desktop
// https://git.nixnet.services/Narsil/desktop_user.js
// **********************************************************************************
//
// Author    : Narsil    : https://git.nixnet.services/Narsil
//
// Based on  : arkenfox  : https://github.com/arkenfox/user.js
//
// License   : https://git.nixnet.services/Narsil/desktop_user.js/raw/branch/master/LICENSE
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// START: internal custom pref to test for syntax error
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable about:config warning
user_pref("browser.aboutConfig.showWarning", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// STARTUP
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);
// -------------------------------------
// Set startup page [SETUP-CHROME]
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
user_pref("browser.startup.page", 0);
// -------------------------------------
// Set HOME+NEWWINDOW page
user_pref("browser.startup.homepage", "about:blank");
// -------------------------------------
// Set NEWTAB page
// true=Activity Stream (default), false=blank page
user_pref("browser.newtabpage.enabled", false);
// -------------------------------------
// Disable sponsored content on Firefox Home (Activity Stream)
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+] Pocket > Sponsored Stories
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] Sponsored shortcuts
// -------------------------------------
// Clear default topsites
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.topsites.contile.enabled", false);
user_pref("browser.topsites.useRemoteSetting", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// GEOLOCATION / LANGUAGE / LOCALE
// >>>>>>>>>>>>>>>>>>>>>
//
// Use Mozilla geolocation service instead of Google if permission is granted [FF74+]
user_pref("geo.provider.network.url", "");
// user_pref("geo.provider.network.logging.enabled", true); // [HIDDEN PREF]
// -------------------------------------
// Disable using the OS's geolocation service
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_gpsd", false); // [LINUX]
user_pref("geo.provider.geoclue.always_high_accuracy", false); // [LINUX]
user_pref("geo.provider.use_geoclue", false); [FF102+] [LINUX]
// -------------------------------------
// Disable region updates
user_pref("browser.region.network.url", ""); // [FF78+] Defense-in-depth
user_pref("browser.region.update.enabled", false); // [FF79+]
// -------------------------------------
// Set search region
user_pref("browser.search.region", "US"); // [HIDDEN PREF]
// -------------------------------------
// Set preferred language for displaying pages
user_pref("intl.accept_languages", "en-US, en");
// -------------------------------------
// Use en-US locale regardless of the system or region locale
user_pref("javascript.use_us_english_locale", true); // [HIDDEN PREF]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// QUIETER FOX
// >>>>>>>>>>>>>>>>>>>>>
//
// RECOMMENDATIONS
//
// Disable recommendation pane in about:addons (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
// -------------------------------------
// Disable recommendations in about:addons' Extensions and Themes panes [FF68+]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
// -------------------------------------
// Disable personalized Extension Recommendations in about:addons and AMO [FF65+]
user_pref("browser.discovery.enabled", false);
//
// TELEMETRY
//
// Disable new data submission [FF41+]
user_pref("datareporting.policy.dataSubmissionEnabled", false);
// -------------------------------------
// Disable Health Reports
user_pref("datareporting.healthreport.uploadEnabled", false);
// -------------------------------------
// Disable telemetry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // see [NOTE]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] Background Hang Reporter
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]
// -------------------------------------
// Disable Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");
// -------------------------------------
// Disable PingCentre telemetry (used in several System Add-ons) [FF57+]
user_pref("browser.ping-centre.telemetry", false);
// -------------------------------------
// Disable Firefox Home (Activity Stream) telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
//
// STUDIES
//
// Disable Studies
user_pref("app.shield.optoutstudies.enabled", false);
// -------------------------------------
// Disable Normandy/Shield [FF60+]
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");
//
// CRASH REPORTS
//
// Disable Crash Reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
// user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [DEFAULT: false]
// -------------------------------------
// Enforce no submission of backlogged Crash Reports [FF58+]
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [DEFAULT: false]
//
// OTHER
//
// Disable Captive Portal detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]
// -------------------------------------
// Disable Network Connectivity checks [FF65+]
user_pref("network.connectivity-service.enabled", false);
// -------------------------------------
// Disable contentblocking reports
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy.enabled", false);
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.hide_vpn_banner", true);
user_pref("browser.contentblocking.report.show_mobile_app", false);
user_pref("browser.vpn_promo.enabled", false);
user_pref("browser.promo.focus.enabled", false);
// -------------------------------------
// Block unwanted connections
user_pref("app.feedback.baseURL", "");
user_pref("app.support.baseURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");
user_pref("app.update.staging.enabled", false);
// -------------------------------------
// Remove default handlers and translation engine
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.name", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.name", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.irc.0.name", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.name", "");
user_pref("browser.translation.engine", "");
// -------------------------------------
// Disable connections to Mozilla servers
user_pref("services.settings.server", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SAFE BROWSING (SB)
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable SB (Safe Browsing)
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Disable SB checks for downloads (both local lookups + remote)
user_pref("browser.safebrowsing.downloads.enabled", false);
// -------------------------------------
// Disable SB checks for downloads (remote)
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
// -------------------------------------
// Disable SB checks for unwanted software
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
// -------------------------------------
// Disable "ignore this warning" on SB warnings [FF45+]
// user_pref("browser.safebrowsing.allowOverride", false);
// -------------------------------------
// Google connections
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google.advisory", "");
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// BLOCK IMPLICIT OUTBOUND
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable link prefetching
user_pref("network.prefetch-next", false);
// -------------------------------------
// Disable DNS prefetching
user_pref("network.dns.disablePrefetch", true);
// user_pref("network.dns.disablePrefetchFromHTTPS", true); // [DEFAULT: true]
// -------------------------------------
// Disable predictor / prefetching
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [DEFAULT: false]
// -------------------------------------
// Disable link-mouseover opening connection to linked server
user_pref("network.http.speculative-parallel-limit", 0);
// -------------------------------------
// Disable mousedown speculative connections on bookmarks and history [FF98+]
user_pref("browser.places.speculativeConnect.enabled", false);
// -------------------------------------
// Enforce no "Hyperlink Auditing" (click tracking)
// user_pref("browser.send_pings", false); // [DEFAULT: false]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DNS / DoH / PROXY / SOCKS / IPv6
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable IPv6
user_pref("network.dns.disableIPv6", true);
// -------------------------------------
// Set the proxy server to do any DNS lookups when using SOCKS
user_pref("network.proxy.socks_remote_dns", true);
// -------------------------------------
// Disable using UNC (Uniform Naming Convention) paths [FF61+]
user_pref("network.file.disable_unc_paths", true); // [HIDDEN PREF]
// -------------------------------------
// Disable GIO as a potential proxy bypass vector
user_pref("network.gio.supported-protocols", ""); // [HIDDEN PREF]
// -------------------------------------
// Disable proxy direct failover for system requests [FF91+]
// user_pref("network.proxy.failover_direct", false);
// -------------------------------------
// Disable proxy bypass for system request failures [FF95+]
// user_pref("network.proxy.allow_bypass", false); // [HIDDEN PREF FF95-96]
// -------------------------------------
// Disable DNS-over-HTTPS (DoH) rollout [FF60+]
user_pref("network.trr.mode", 5);
user_pref("network.trr.uri", "");
user_pref("network.trr.confirmationNS", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// LOCATION BAR / SEARCH BAR / SUGGESTIONS / HISTORY / FORMS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable location bar using search
// user_pref("keyword.enabled", false);
// -------------------------------------
// Disable location bar domain guessing
user_pref("browser.fixup.alternate.enabled", false); // [DEFAULT: false FF104+]
// Disable live search suggestions
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
// -------------------------------------
// Disable location bar making speculative connections [FF56+]
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// -------------------------------------
// Disable location bar leaking single words to a DNS provider **after searching** [FF78+]
// 0=never resolve single words, 1=heuristic (default), 2=always resolve
user_pref("browser.urlbar.dnsResolveSingleWordsAfterSearch", 0); // [DEFAULT: 0 FF104+]
// -------------------------------------
// Disable location bar contextual suggestions [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
// -------------------------------------
// Disable tab-to-search [FF85+]
user_pref("browser.urlbar.suggest.engines", false);
// -------------------------------------
// Disable search and form history
user_pref("browser.formfill.enable", false);
// -------------------------------------
// Disable coloring of visited links
user_pref("layout.css.visited_links_enabled", false);
// -------------------------------------
// Disable merino
user_pref("browser.urlbar.merino.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PASSWORDS
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable saving passwords and password alerts.
user_pref("signon.rememberSignons", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
// -------------------------------------
// Set when Firefox should prompt for the primary password
// 0=once per session (default), 1=every time it's needed, 2=after n minutes
user_pref("security.ask_for_password", 2);
// -------------------------------------
// Set how long in minutes Firefox should remember the primary password (0901)
user_pref("security.password_lifetime", 5); // [DEFAULT: 30]
// -------------------------------------
// Disable auto-filling username & password form fields
user_pref("signon.autofillForms", false);
// -------------------------------------
// Disable formless login capture for Password Manager [FF51+]
user_pref("signon.formlessCapture.enabled", false);
// -------------------------------------
// Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources [FF41+]
// 0 = don't allow sub-resources to open HTTP authentication credentials dialogs
// 1 = don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2 = allow sub-resources to open HTTP authentication credentials dialogs (default)
user_pref("network.auth.subresource-http-auth-allow", 1);
// -------------------------------------
// Enforce no automatic authentication on Microsoft sites [FF91+] [WINDOWS 10+]
// user_pref("network.http.windows-sso.enabled", false); // [DEFAULT: false]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DISK AVOIDANCE
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable disk cache
user_pref("browser.cache.disk.enable", false);
// -------------------------------------
// Disable media cache from writing to disk in Private Browsing
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // [FF75+]
user_pref("media.memory_cache_max_size", 65536);
// -------------------------------------
// Disable storing extra session data [SETUP-CHROME]
// 0=everywhere, 1=unencrypted sites, 2=nowhere
user_pref("browser.sessionstore.privacy_level", 2);
// -------------------------------------
// Disable automatic Firefox start and session restore after reboot [FF62+] [WINDOWS]
user_pref("toolkit.winRegisterApplicationRestart", false);
// -------------------------------------
// Disable favicons in shortcuts
user_pref("browser.shell.shortcutFavicons", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HTTPS (SSL/TLS / OCSP / CERTS / HPKP)
// >>>>>>>>>>>>>>>>>>>>>
//
// Require safe negotiation
user_pref("security.ssl.require_safe_negotiation", true);
// -------------------------------------
// Disable TLS1.3 0-RTT (round-trip time) [FF51+]
user_pref("security.tls.enable_0rtt_data", false);
//
// OCSP (Online Certificate Status Protocol)
//
// Enforce OCSP fetching to confirm current validity of certificates
// 0=disabled, 1=enabled (default), 2=enabled for EV certificates only
user_pref("security.OCSP.enabled", 0); // [DEFAULT: 1]
// -------------------------------------
// Set OCSP fetch failures (non-stapled) to hard-fail [SETUP-WEB]
user_pref("security.OCSP.require", false);
//
// CERTS / HPKP (HTTP Public Key Pinning)
//
// Disable Windows 8.1's Microsoft Family Safety cert [FF50+] [WINDOWS]
// 0=disable detecting Family Safety mode and importing the root
// 1=only attempt to detect Family Safety mode (don't import the root)
// 2=detect Family Safety mode and import the root
user_pref("security.family_safety.mode", 0);
// -------------------------------------
// Enable strict PKP (Public Key Pinning)
// 0=disabled, 1=allow user MiTM (default; such as your antivirus), 2=strict
user_pref("security.cert_pinning.enforcement_level", 2);
// -------------------------------------
// Disable CRLite [FF73+]
// 0 = disabled
// 1 = consult CRLite but only collect telemetry (default)
// 2 = consult CRLite and enforce both "Revoked" and "Not Revoked" results
// 3 = consult CRLite and enforce "Not Revoked" results, but defer to OCSP for "Revoked" (FF99+)
user_pref("security.remote_settings.intermediates.enabled", false);
user_pref("security.remote_settings.intermediates.bucket", "");
user_pref("security.remote_settings.intermediates.collection", "");
user_pref("security.remote_settings.intermediates.signer", "");
user_pref("security.remote_settings.crlite_filters.enabled", false);
user_pref("security.remote_settings.crlite_filters.bucket", "");
user_pref("security.remote_settings.crlite_filters.collection", "");
user_pref("security.remote_settings.crlite_filters.signer", "");
user_pref("security.pki.crlite_mode", 0);
//
// MIXED CONTENT
//
// Disable insecure passive content (such as images) on https pages [SETUP-WEB]
// user_pref("security.mixed_content.block_display_content", true); // Defense-in-depth
// -------------------------------------
// Enable HTTPS-Only mode in all windows [FF76+]
user_pref("dom.security.https_only_mode", true); // [FF76+]
// user_pref("dom.security.https_only_mode_pbm", true); // [FF80+]
// -------------------------------------
// Enable HTTPS-Only mode for local resources [FF77+]
// user_pref("dom.security.https_only_mode.upgrade_local", true);
// -------------------------------------
// Disable HTTP background requests [FF82+]
user_pref("dom.security.https_only_mode_send_http_background_request", false);
//
// UI (User Interface)
//
// Display warning on the padlock for "broken security"
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
// -------------------------------------
// Display advanced information on Insecure Connection warning pages
user_pref("browser.xul.error_pages.expert_bad_cert", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// FONTS
// >>>>>>>>>>>>>>>>>>>>>
//
// Limit font visibility (Windows, Mac, some Linux) [FF94+]
// 1=only base system fonts, 2=also fonts from optional language packs, 3=also user-installed fonts
// user_pref("layout.css.font-visibility.private", 1);
// user_pref("layout.css.font-visibility.standard", 1);
// user_pref("layout.css.font-visibility.trackingprotection", 1);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// HEADERS / REFERERS
// >>>>>>>>>>>>>>>>>>>>>
//
// Control when to send a cross-origin referer
// 0=always (default), 1=only if base domains match, 2=only if hosts match
user_pref("network.http.referer.XOriginPolicy", 2);
// -------------------------------------
// Control the amount of cross-origin information to send [FF52+]
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// CONTAINERS
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable Container Tabs and its UI setting [FF50+]
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
// -------------------------------------
// Set behavior on "+ Tab" button to display container menu on left click [FF74+]
// user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// PLUGINS / MEDIA / WEBRTC
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable WebRTC (Web Real-Time Communication)
user_pref("media.peerconnection.enabled", false);
// -------------------------------------
// Force WebRTC inside the proxy [FF70+]
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// -------------------------------------
// Force a single network interface for ICE candidates generation [FF42+]
user_pref("media.peerconnection.ice.default_address_only", true);
// -------------------------------------
// Force exclusion of private IPs from ICE candidates [FF51+]
// user_pref("media.peerconnection.ice.no_host", true);
// -------------------------------------
// Disable GMP (Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-gmpopenh264.enabled", false);
// -------------------------------------
// Disable widevine CDM (Content Decryption Module)
user_pref("media.gmp-widevinecdm.enabled", false);
// -------------------------------------
// Disable all DRM content (EME: Encryption Media Extension)
user_pref("media.eme.enabled", false);
user_pref("browser.eme.ui.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DOM (DOCUMENT OBJECT MODEL)
// >>>>>>>>>>>>>>>>>>>>>
//
// Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// MISCELLANEOUS
// >>>>>>>>>>>>>>>>>>>>>
//
// Prevent accessibility services from accessing your browser [RESTART]
user_pref("accessibility.force_disabled", 1);
// -------------------------------------
// Disable sending additional analytics to web servers
user_pref("beacon.enabled", false);
// -------------------------------------
// Remove temp files opened with an external application
user_pref("browser.helperApps.deleteTempFileOnExit", true);
// -------------------------------------
// Disable UITour backend so there is no chance that a remote page can use it
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.url", ""); // Defense-in-depth
// -------------------------------------
// Reset remote debugging to disabled
user_pref("devtools.debugger.remote-enabled", false); // [DEFAULT: false]
// -------------------------------------
// Disable middle mouse click opening links from clipboard
user_pref("middlemouse.contentLoadURL", false);
// -------------------------------------
// Disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0 (default) or 1=allow, 2=block
// user_pref("permissions.default.shortcuts", 2);
// -------------------------------------
// Remove special permissions for certain mozilla domains [FF35+]
user_pref("permissions.manager.defaultsUrl", "");
// -------------------------------------
// Remove webchannel whitelist
user_pref("webchannel.allowObject.urlWhitelist", "");
// -------------------------------------
// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);
// -------------------------------------
// Enforce PDFJS, disable PDFJS scripting
user_pref("pdfjs.disabled", false); // [DEFAULT: false]
user_pref("pdfjs.enableScripting", false); // [FF86+]
// -------------------------------------
// Disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS]
user_pref("network.protocol-handler.external.ms-windows-store", false);
// -------------------------------------
// Disable permissions delegation [FF73+]
user_pref("permissions.delegation.enabled", false);
//
// DOWNLOADS
//
// Enable user interaction for security by always asking where to download
user_pref("browser.download.useDownloadDir", false);
// -------------------------------------
// Disable downloads panel opening on every download [FF96+]
user_pref("browser.download.alwaysOpenPanel", false);
// -------------------------------------
// Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);
// -------------------------------------
// Enable user interaction for security by always asking how to handle new mimetypes [FF101+]
user_pref("browser.download.always_ask_before_handling_new_types", true);
//
// EXTENSIONS
//
// Lock down allowed extension directories
user_pref("extensions.enabledScopes", 5); // [HIDDEN PREF]
user_pref("extensions.autoDisableScopes", 15); // [DEFAULT: 15]
// -------------------------------------
// Disable bypassing 3rd party extension install prompts [FF82+]
user_pref("extensions.postDownloadThirdPartyPrompt", false);
// -------------------------------------
// Disable webextension restrictions on certain mozilla domains [FF60+]
// user_pref("extensions.webextensions.restrictedDomains", "");
// -------------------------------------
// Disable extensions suggestions
user_pref("extensions.webservice.discoverURL", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// ETP (ENHANCED TRACKING PROTECTION)
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable ETP Strict Mode [FF86+]
user_pref("browser.contentblocking.category", "strict");
// -------------------------------------
// Disable ETP web compat features [FF93+]
// user_pref("privacy.antitracking.enableWebcompat", false);
// -------------------------------------
// Enable state partitioning of service workers [FF96+]
user_pref("privacy.partition.serviceWorkers", true); // [DEFAULT: true FF105+]
// -------------------------------------
// Enable APS (Always Partitioning Storage)
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true); // [FF104+] [DEFAULT: true FF109+}
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage.exempt_sessionstorage", false); // [FF105+] [DEFAULT: false FF109+]
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// SHUTDOWN & SANITIZING
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable Firefox to clear items on shutdown
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
//
// SANITIZE ON SHUTDOWN: IGNORES "ALLOW" SITE EXCEPTIONS
//
// Set/enforce what items to clear on shutdown [SETUP-CHROME]
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.downloads", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.formdata", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.history", true); // [DEFAULT: true]
user_pref("privacy.clearOnShutdown.sessions", true); // [DEFAULT: true]
// user_pref("privacy.clearOnShutdown.siteSettings", false); // [DEFAULT: false]
// -------------------------------------
// Set Session Restore to clear on shutdown [FF34+]
// user_pref("privacy.clearOnShutdown.openWindows", true);
//
// SANITIZE ON SHUTDOWN: RESPECTS "ALLOW" SITE EXCEPTIONS FF103+
//
// Set "Cookies" and "Site Data" to clear on shutdown
user_pref("privacy.clearOnShutdown.cookies", true); // Cookies
user_pref("privacy.clearOnShutdown.offlineApps", false); // Site Data
// -------------------------------------
// Set cache to clear on exit [FF96+]
// user_pref("privacy.clearsitedata.cache.enabled", true);
//
// SANITIZE MANUAL: IGNORES "ALLOW" SITE EXCEPTIONS
//
// Reset default items to clear with Ctrl-Shift-Del
user_pref("privacy.cpd.cache", true); // [DEFAULT: true]
user_pref("privacy.cpd.formdata", true); // Form & Search History
user_pref("privacy.cpd.history", true); // Browsing & Download History
user_pref("privacy.cpd.offlineApps", true); // Offline Website Data
user_pref("privacy.cpd.sessions", true); // [DEFAULT: true]
user_pref("privacy.cpd.offlineApps", true); // [DEFAULT: false]
user_pref("privacy.cpd.cookies", true);
// user_pref("privacy.cpd.downloads", true); // not used
// user_pref("privacy.cpd.openWindows", false); // Session Restore
// user_pref("privacy.cpd.passwords", false);
// user_pref("privacy.cpd.siteSettings", false);
// -------------------------------------
// Clear Session Restore data when sanitizing on shutdown or manually [FF34+]
// user_pref("privacy.clearOnShutdown.openWindows", true);
// user_pref("privacy.cpd.openWindows", true);
// -------------------------------------
// Reset default "Time range to clear" for "Clear Recent History"
// 0=everything, 1=last hour, 2=last two hours, 3=last four hours, 4=today
user_pref("privacy.sanitize.timeSpan", 0);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// RFP (RESIST FINGERPRINTING)
// >>>>>>>>>>>>>>>>>>>>>
//
// Enable privacy.resistFingerprinting [FF41+]
user_pref("privacy.resistFingerprinting", true);
// -------------------------------------
// Set new window size rounding max values [FF55+]
// user_pref("privacy.window.maxInnerWidth", 1600);
// user_pref("privacy.window.maxInnerHeight", 900);
// -------------------------------------
// Disable mozAddonManager Web API [FF57+]
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN PREF]
// -------------------------------------
// Enable RFP letterboxing [FF67+]
// user_pref("privacy.resistFingerprinting.letterboxing", true); // [HIDDEN PREF]
// user_pref("privacy.resistFingerprinting.letterboxing.dimensions", ""); // [HIDDEN PREF]
// -------------------------------------
// Experimental RFP [FF91+]
// user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");
// user_pref("privacy.resistFingerprinting.testGranularityMask", 0);
// -------------------------------------
// Set RFP's font visibility level [FF94+]
// user_pref("layout.css.font-visibility.resistFingerprinting", 1); // [DEFAULT: 1]
// -------------------------------------
// Disable using system colors
user_pref("browser.display.use_system_colors", false); // [DEFAULT: false NON-WINDOWS]
// -------------------------------------
// Enforce non-native widget theme
user_pref("widget.non-native-theme.enabled", true); // [DEFAULT: true]
// -------------------------------------
// Enforce links targeting new windows to open in a new tab instead
// 1=most recent window or tab, 2=new window, 3=new tab
user_pref("browser.link.open_newwindow", 3); // [DEFAULT: 3]
// -------------------------------------
// Set all open window methods to abide by "browser.link.open_newwindow"
user_pref("browser.link.open_newwindow.restriction", 0);
// -------------------------------------
// Disable WebGL (Web Graphics Library)
user_pref("webgl.disabled", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OPTIONAL OPSEC
// >>>>>>>>>>>>>>>>>>>>>
//
// Start Firefox in PB (Private Browsing) mode
// user_pref("browser.privatebrowsing.autostart", true);
// -------------------------------------
// Disable memory cache
// capacity: -1=determine dynamically (default), 0=none, n=memory capacity in kibibytes
// user_pref("browser.cache.memory.enable", false);
// user_pref("browser.cache.memory.capacity", 0);
// -------------------------------------
// Disable saving passwords
// user_pref("signon.rememberSignons", false);
// -------------------------------------
// Disable permissions manager from writing to disk [FF41+] [RESTART]
// user_pref("permissions.memory_only", true); // [HIDDEN PREF]
// -------------------------------------
// Disable intermediate certificate caching [FF41+] [RESTART]
// user_pref("security.nocertdb", true); //
// -------------------------------------
// Disable favicons in history and bookmarks
user_pref("browser.chrome.site_icons", false);
// -------------------------------------
// Exclude "Undo Closed Tabs" in Session Restore
// user_pref("browser.sessionstore.max_tabs_undo", 0);
// -------------------------------------
// Disable resuming session from crash
// user_pref("browser.sessionstore.resume_from_crash", false);
// -------------------------------------
// Disable "open with" in download dialog [FF50+]
// user_pref("browser.download.forbid_open_with", true);
// -------------------------------------
// Disable location bar suggestion types
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]
// -------------------------------------
// Disable location bar dropdown
// user_pref("browser.urlbar.maxRichResults", 0);
// -------------------------------------
// Disable location bar autofill
user_pref("browser.urlbar.autoFill", false);
// -------------------------------------
// Disable browsing and download history
user_pref("places.history.enabled", false);
// -------------------------------------
// Disable Windows jumplist [WINDOWS]
// user_pref("browser.taskbar.lists.enabled", false);
// user_pref("browser.taskbar.lists.frequent.enabled", false);
// user_pref("browser.taskbar.lists.recent.enabled", false);
// user_pref("browser.taskbar.lists.tasks.enabled", false);
// -------------------------------------
// Disable Windows taskbar preview [WINDOWS]
// user_pref("browser.taskbar.previews.enable", false); // [DEFAULT: false]
// -------------------------------------
// Discourage downloading to desktop
// 0=desktop, 1=downloads (default), 2=last used
// user_pref("browser.download.folderList", 2);
// -------------------------------------
// Disable Form Autofill
user_pref("extensions.formautofill.addresses.enabled", false); // [FF55+]
user_pref("extensions.formautofill.creditCards.enabled", false); // [FF56+]
user_pref("extensions.formautofill.heuristics.enabled", false); // [FF55+]
// -------------------------------------
// Limit events that can cause a pop-up
// user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
// -------------------------------------
// Disable page thumbnail collection
// user_pref("browser.pagethumbnails.capturing_disabled", true); // [HIDDEN PREF]
// -------------------------------------
// Enable Site Isolation
user_pref("fission.autostart", true);
user_pref("gfx.webrender.all", true);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// OPTIONAL HARDENING
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable MathML (Mathematical Markup Language) [FF51+]
user_pref("mathml.disabled", true);
// -------------------------------------
// Disable in-content SVG (Scalable Vector Graphics) [FF53+]
// user_pref("svg.disabled", true);
// -------------------------------------
// Disable graphite
user_pref("gfx.font_rendering.graphite.enabled", false);
// -------------------------------------
// Disable asm.js [FF22+]
user_pref("javascript.options.asmjs", false);
// -------------------------------------
// Disable Ion and baseline JIT to harden against JS exploits
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]
// -------------------------------------
// Disable WebAssembly [FF52+]
user_pref("javascript.options.wasm", false);
// -------------------------------------
// Disable rendering of SVG OpenType fonts
user_pref("gfx.font_rendering.opentype_svg.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T TOUCH
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable Firefox blocklist
user_pref("extensions.blocklist.enabled", false); // [DEFAULT: true]
user_pref("extensions.blocklist.addonItemURL", "");	
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.itemURL", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.addons.signer", "");
user_pref("services.blocklist.plugins.collection", "");	
user_pref("services.blocklist.plugins.signer", "");
user_pref("services.blocklist.gfx.collection", "");
user_pref("services.blocklist.gfx.signer", "");
// -------------------------------------
// Enforce no referer spoofing
user_pref("network.http.referer.spoofSource", true); // [DEFAULT: false]
// -------------------------------------
// Enforce a security delay on some confirmation dialogs such as install, open/save
user_pref("security.dialog_enable_delay", 1000); // [DEFAULT: 1000]
// -------------------------------------
// Enforce no First Party Isolation [FF51+]
user_pref("privacy.firstparty.isolate", false); // [DEFAULT: false]
// -------------------------------------
// Enforce SmartBlock shims [FF81+]
user_pref("extensions.webcompat.enable_shims", true); // [DEFAULT: true]
// -------------------------------------
// Enforce no TLS 1.0/1.1 downgrades
user_pref("security.tls.version.enable-deprecated", false); // [DEFAULT: false]
// -------------------------------------
// Enforce disabling of Web Compatibility Reporter [FF56+]
user_pref("extensions.webcompat-reporter.enabled", false); // [DEFAULT: false]
// -------------------------------------
// prefsCleaner: reset items removed from arkenfox FF102+
// user_pref("browser.startup.blankWindow", "");
// user_pref("browser.newtab.preload", "");
// user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", "");
// user_pref("browser.newtabpage.activity-stream.feeds.snippets", "");
// user_pref("browser.ssl_override_behavior", "");
// user_pref("devtools.chrome.enabled", "");
// user_pref("dom.disable_beforeunload", "");
// user_pref("dom.disable_open_during_load", "");
// user_pref("extensions.formautofill.available", "");
// user_pref("extensions.formautofill.addresses.supported", "");
// user_pref("extensions.formautofill.creditCards.available", "");
// user_pref("extensions.formautofill.creditCards.supported", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER
// >>>>>>>>>>>>>>>>>>>>>
//
// Disable APIs
user_pref("geo.enabled", false);
// user_pref("full-screen-api.enabled", false);
user_pref("browser.cache.offline.enable", false);
// -------------------------------------
// Set default permissions
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.xr", 2); // Virtual Reality
// -------------------------------------
// Disable non-modern cipher suites
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false); // [DEFAULT: false FF109+]
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false); // [DEFAULT: false FF109+]
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
// user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // no PFS
// user_pref("security.ssl3.rsa_aes_128_sha", false); // no PFS
// user_pref("security.ssl3.rsa_aes_256_sha", false); // no PFS
// -------------------------------------
// Control TLS versions
// user_pref("security.tls.version.min", 3); // [DEFAULT: 3]
// user_pref("security.tls.version.max", 4);
// -------------------------------------
// Disable SSL session IDs [FF36+]
// user_pref("security.ssl.disable_session_identifiers", true);
// -------------------------------------
// Onions
// user_pref("dom.securecontext.allowlist_onions", true);
// user_pref("network.http.referer.hideOnionSource", true);
// -------------------------------------
// Referers
// user_pref("network.http.sendRefererHeader", 2);
// user_pref("network.http.referer.trimmingPolicy", 0);
// -------------------------------------
// Set the default Referrer Policy [FF59+]
// 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
// user_pref("network.http.referer.defaultPolicy", 2); // [DEFAULT: 2]
// user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [DEFAULT: 2]
// -------------------------------------
// Disable HTTP Alternative Services [FF37+]
// user_pref("network.http.altsvc.enabled", false);
// -------------------------------------
// Disable website control over browser right-click context menu
// user_pref("dom.event.contextmenu.enabled", false);
// -------------------------------------
// Disable icon fonts (glyphs) and local fallback rendering
// user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
// user_pref("gfx.downloadable_fonts.fallback_delay", -1);
// -------------------------------------
// Disable Clipboard API
// user_pref("dom.event.clipboardevents.enabled", false);
// -------------------------------------
// Disable System Add-on updates
user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
user_pref("extensions.systemAddon.update.url", ""); // [FF44+]
// -------------------------------------
// Enable the DNT (Do Not Track) HTTP header
// user_pref("privacy.donottrackheader.enabled", true);
// -------------------------------------
// Customize ETP settings
// user_pref("network.cookie.cookieBehavior", 5); // [DEFAULT: 5 FF103+]
// user_pref("privacy.partition.network_state.ocsp_cache", true);
// user_pref("privacy.query_stripping.enabled", true); // [FF101+] [ETP FF102+]
user_pref("privacy.query_stripping.strip_list", "__hsfp __hssc __hstc __s _hsenc _openstat dclid fbclid gbraid gclid hsCtaTracking igshid mc_eid ml_subscriber ml_subscriber_hash msclkid oft_c oft_ck oft_d oft_id oft_ids oft_k oft_lk oft_sk oly_anon_id oly_enc_id rb_clickid s_cid twclid vero_conv vero_id wbraid wickedid yclid");
// user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
// user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);
// user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [DEFAULT: true]
// user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [DEFAULT: true]
// -------------------------------------
// Allow embedded tweets and Reddit posts. Don't do it!
// user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com"); // [HIDDEN PREF]
// user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // [HIDDEN PREF]
// -------------------------------------
// Disable service workers
// user_pref("dom.serviceWorkers.enabled", false);
// -------------------------------------
// Disable Web Notifications
// user_pref("dom.webnotifications.enabled", false); // [FF22+]
// user_pref("dom.webnotifications.serviceworker.enabled", false); // [FF44+]
// -------------------------------------
// Disable Push Notifications [FF44+]
user_pref("dom.push.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DON'T BOTHER: FINGERPRINTING
// >>>>>>>>>>>>>>>>>>>>>
//
// prefsCleaner: reset items useless for anti-fingerprinting
// user_pref("browser.zoom.siteSpecific", false);
// user_pref("dom.enable_performance", false);
// user_pref("dom.enable_resource_timing", false);
// user_pref("dom.maxHardwareConcurrency", 2);
// user_pref("font.system.whitelist", ""); // [HIDDEN PREF]
// user_pref("general.appname.override", ""); // [HIDDEN PREF]
// user_pref("general.appversion.override", ""); // [HIDDEN PREF]
// user_pref("general.buildID.override", "20181001000000"); // [HIDDEN PREF]
// user_pref("general.oscpu.override", ""); // [HIDDEN PREF]
// user_pref("general.platform.override", ""); // [HIDDEN PREF]
// user_pref("general.useragent.override", "Mozilla/5.0 (Windows NT 10.0; rv:102.0) Gecko/20100101 Firefox/102.0"); // [HIDDEN PREF]
// user_pref("media.ondevicechange.enabled", false);
// user_pref("media.video_stats.enabled", false);
// user_pref("ui.use_standins_for_native_colors", true);
// user_pref("webgl.enable-debug-renderer-info", false);
user_pref("browser.display.use_document_fonts", 0);
user_pref("device.sensors.enabled", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.netinfo.enabled", false);
user_pref("dom.vibrator.enabled", false);
user_pref("dom.w3c_touch_events.enabled", 0);
user_pref("dom.webaudio.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// NON-PROJECT RELATED
// >>>>>>>>>>>>>>>>>>>>>
//
// WELCOME & WHAT'S NEW NOTICES
//
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("startup.homepage_override_url", ""); // What's New page after updates
//
// WARNINGS
//
user_pref("browser.tabs.warnOnClose", false); // [DEFAULT: false FF94+]
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.warnOnQuitShortcut", false); // [FF94+]
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("browser.warnOnQuit", false);
//
// UPDATES
//
// Disable auto-INSTALLING Firefox updates [NON-WINDOWS]
user_pref("app.update.auto", false);
// -------------------------------------
// Disable auto-CHECKING for extension and theme updates
user_pref("extensions.update.enabled", false);
// -------------------------------------
// Disable auto-INSTALLING extension and theme updates
user_pref("extensions.update.autoUpdateDefault", false);
// -------------------------------------
// Disable extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
// -------------------------------------
// Disable search engine updates (e.g. OpenSearch)
user_pref("browser.search.update", false);
//
// CONTENT BEHAVIOR
//
user_pref("accessibility.typeaheadfind", false); // enable "Find As You Type"
user_pref("clipboard.autocopy", false); // disable autocopy default [LINUX]
user_pref("layout.spellcheckDefault", 0); // 0=none, 1-multi-line, 2=multi-line & single-line
//
// FIREFOX HOME CONTENT
//
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//
// UX FEATURES
//
user_pref("extensions.pocket.enabled", false); // Pocket Account [FF46+]
user_pref("extensions.screenshots.disabled", true); // [FF55+]
user_pref("identity.fxaccounts.enabled", false); // Firefox Accounts & Sync [FF60+] [RESTART]
user_pref("reader.parse-on-load.enabled", false); // Reader View
user_pref("browser.tabs.firefox-view", false); // Firefox-view
//
// OTHER
//
// user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false); // disable CFR [FF67+]
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // disable CFR [FF67+]
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // What's New toolbar icon [FF69+]
user_pref("browser.urlbar.showSearchTerms.enabled", false);
user_pref("browser.sessionstore.interval", 30000); // minimum interval between session save operations
user_pref("network.manage-offline-status", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.disableResetPrompt", true); // [HIDDEN PREF]
// user_pref("xpinstall.signatures.required", false); // enforced extension signing (Nightly/ESR)
//
// MORE
//
// user_pref("security.insecure_connection_icon.enabled", ""); // [DEFAULT: true FF70+]
// user_pref("security.mixed_content.block_active_content", ""); // [DEFAULT: true since at least FF60]
user_pref("security.ssl.enable_ocsp_stapling", false); // [DEFAULT: true FF26+]
// user_pref("webgl.disable-fail-if-major-performance-caveat", ""); // [DEFAULT: true FF86+]
user_pref("webgl.enable-webgl2", false);
// user_pref("webgl.min_capability_mode", "");
//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// DEPRECATED / REMOVED / LEGACY / RENAMED
// >>>>>>>>>>>>>>>>>>>>>
//
// ESR102.x still uses all the following prefs
//
// FF103
//
// Delete cookies and site data on exit - replaced by sanitizeOnShutdown
user_pref("network.cookie.lifetimePolicy", 2);
// -------------------------------------
// Disable SHA-1 certificates
// user_pref("security.pki.sha1_enforcement_level", 1); // [DEFAULT: 1]
//
