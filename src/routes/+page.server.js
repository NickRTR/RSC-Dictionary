import { codes } from "$lib/codeList";

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const input = data.get("code");
		const code = codes[input];

		if (code !== undefined) {
			return { code: input, title: code.title, description: code.description, additionalInformation: code.additionalInformation };
		} else {
			return { error: `${input} is an invalid Status Code. Try 418 :)` };
		}
	}
};
