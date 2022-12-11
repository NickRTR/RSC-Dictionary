<body>
	<slot />
</body>

<style>
	:global(:root) {
		--background: #0b2545;
		--text: #ffc300;
		--accent-green: #8ac926;
		--accent-orange: #fe7f2d;
	}

	:global(body) {
		margin: 0;
	}

	body {
		max-width: 500px;
		margin: auto;
		height: 100vh;
		font-family: monospace;
		font-size: larger;
		color: var(--text);
		background-color: var(--background);
	}
</style>
