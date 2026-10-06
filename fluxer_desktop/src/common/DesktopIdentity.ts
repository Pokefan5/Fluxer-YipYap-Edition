// SPDX-License-Identifier: AGPL-3.0-or-later

import {BUILD_CHANNEL} from '@electron/common/BuildChannel';

export const DESKTOP_APP_NAME = BUILD_CHANNEL === 'canary' ? 'YipYap Canary' : 'YipYap';
export const MACOS_BUNDLE_ID = BUILD_CHANNEL === 'canary' ? 'app.yipyap.canary' : 'app.yipyap';
export const LINUX_DESKTOP_ENTRY_ID =
	BUILD_CHANNEL === 'canary' ? 'app.yipyap.YipYapDesktopCanary' : 'app.yipyap.YipYapDesktop';
export const LINUX_PORTAL_SESSION_TOKEN =
	BUILD_CHANNEL === 'canary' ? 'yipyap_canary_global_shortcuts' : 'yipyap_global_shortcuts';
export const LEGACY_LINUX_DESKTOP_ENTRY_ID = BUILD_CHANNEL === 'canary' ? 'yipyap-canary' : 'yipyap';
export const LINUX_ICON_NAME = BUILD_CHANNEL === 'canary' ? 'yipyap-canary' : 'yipyap';
export const WINDOWS_SHORTCUT_AUTHOR = 'Not Fluxer Platform AB';
export const WINDOWS_VELOPACK_ID = BUILD_CHANNEL === 'canary' ? 'yipyap_desktop_canary' : 'yipyap_desktop';
export const WINDOWS_LEGACY_SQUIRREL_ID = 'yipyap_app';
export const WINDOWS_APP_USER_MODEL_ID = BUILD_CHANNEL === 'canary' ? 'YipYap.YipYap.Canary' : 'YipYap.YipYap';
export const WINDOWS_LEGACY_APP_USER_MODEL_IDS = [`velopack.${WINDOWS_VELOPACK_ID}`];
export const WINDOWS_TOAST_ACTIVATOR_CLSID =
	BUILD_CHANNEL === 'canary' ? '{9CEDB5C0-3552-43B0-A279-2232E0CDF74C}' : '{48EEF21B-F3AE-431E-8CF2-386FFB2143F2}';
