<script>
	import { enhance } from "$app/forms";

	export let form;
</script>

<body>
	<h1>RSC Dictionary</h1>

	<p>Find the right Response Status Codes for your type of Response.</p>

	<form method="POST" use:enhance>
		<input type="number" name="code" placeholder="Code" />
		<button type="submit">Search</button>
	</form>

	{#if form?.error}
		<p class="error">{form.error}</p>
	{:else if form?.code}
		<p>{form.code}: {form.title}</p>
		{#if form.additionalInformation}
			<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{form.code}" title="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/{form.code}" rel="noreferrer" target="_blank">Additional Information</a>
		{/if}
	{/if}
</body>

<style>
	.error {
		color: red;
	}
</style>
