<div class="today">
	<h1>Today’s Hightlights</h1>

	<div class="block wind">
		<h2>Wind status</h2>
	</div>
	<div class="block humidity">
		<h2>Humidity</h2>
	</div>
	<div class="block visibility">
		<h2>Visibility</h2>
	</div>
	<div class="block air">
		<h2>Air Pressure</h2>
	</div>
</div>

<style>
	h1 {
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 28px;
		color: #E7E7EB;
		width: 100%;
	}

	.today {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(3, 1fr);
		grid-column-gap: 48px;
		grid-row-gap: 48px;
		background-color: red;
		max-width: 704px;
		margin: auto;
	}

	h1 { grid-area: 1 / 1 / 2 / 3; }
	.wind { grid-area: 2 / 1 / 3 / 2; }
	.humidity { grid-area: 2 / 2 / 3 / 3; }
	.visibility { grid-area: 3 / 1 / 4 / 2; }
	.air { grid-area: 3 / 2 / 4 / 3; }

	.block {
		max-width: 328px;
		width: 328px;
		background-color: #1E213A;
	}
</style>
