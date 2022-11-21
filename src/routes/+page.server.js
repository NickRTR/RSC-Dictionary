import { codes } from "$lib/codeList";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const code = data.get("code");

		if (codes[code] !== undefined) {
			return { code, title: codes[code].title, additionalInformation: codes[code].additionalInformation };
		} else {
			return { error: "Invalid Status Code. Try 418 ;)" };
		}
	}
};
