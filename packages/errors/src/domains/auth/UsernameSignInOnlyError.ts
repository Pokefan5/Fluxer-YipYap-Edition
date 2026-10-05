// SPDX-License-Identifier: AGPL-3.0-or-later

import {APIErrorCodes} from '@fluxer/constants/src/ApiErrorCodes';
import {BadRequestError} from '@fluxer/errors/src/domains/core/BadRequestError';

<<<<<<<< HEAD:packages/errors/src/domains/channel/FollowTargetContentWarningRequiredError.ts
export class FollowTargetContentWarningRequiredError extends BadRequestError {
	constructor() {
		super({
			code: APIErrorCodes.FOLLOW_TARGET_CONTENT_WARNING_REQUIRED,
		});
========
export class UsernameSignInOnlyError extends BadRequestError {
	constructor() {
		super({code: APIErrorCodes.USERNAME_SIGN_IN_ONLY});
>>>>>>>> Upstream/main:packages/errors/src/domains/auth/UsernameSignInOnlyError.ts
	}
}
