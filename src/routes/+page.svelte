<script>
	import { enhance } from "$app/forms";

	export let form;

	function type(code) {
		if (code >= 500) {
			return "Server error responses";
		} else if (code >= 400) {
			return "Client error responses";
		} else if (code >= 300) {
			return "Redirection messages";
		} else if (code >= 200) {
			return "Successful responses";
		} else if (code >= 100) {
			return "Informational responses";
		} else {
			return "You broke the system.";
		}
	}
</script>

<body>
	<h1>RSC Dictionary</h1>

	<p>HTTP Response Status Code Dictionary</p>

	<form method="POST" use:enhance>
		<input type="number" name="code" placeholder="Code" required />
		<button type="submit">Search</button>
	</form>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{:else if form?.code}
		<p>{form.code}: {form.title}</p>
		<p><b>Type: </b>{type(form.code)}</p>
		<p><b>Description: </b>{form.description}</p>
		{#if form.additionalInformation}
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{form.code}" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{form.code}" rel="noreferrer" target="_blank"
				>Additional Information</a
			>
		{/if}
	{/if}
</body>

<style>
	.error {
		color: red;
	}

	body {
		margin-inline: 0.5rem;
	}

	h1 {
		color: var(--accent-orange);
	}

	a {
		color: var(--accent-green);
	}

	input {
		border-radius: 0.5rem;
		padding: 0.25rem;
		border: none;
		border: 3px solid white;
		outline: none;
		transition: all 0.1s ease-in-out;
	}

	input:hover,
	input:focus {
		border-color: var(--accent-orange);
	}

	button {
		border-radius: 0.5rem;
		padding: 0.25rem 0.5rem;
		font-weight: bold;
		background-color: var(--accent-orange);
		border: 3px solid var(--accent-orange);
		transition: all 0.1s ease-in-out;
		outline: none;
	}

	button:hover,
	button:focus {
		background-color: white;
	}
</style>
