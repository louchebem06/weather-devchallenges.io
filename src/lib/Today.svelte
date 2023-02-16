<div class="today">
	<h1>Today’s Hightlights</h1>
	<div class="firstLine">
		<div class="block wind">
			<h2>Wind status</h2>
			<div class="value">
				<h3>7</h3>
				<h2>mph</h2>
			</div>
		</div>
		<div class="block humidity">
			<h2>Humidity</h2>
			<div class="value">
				<h3>84</h3>
				<h2>%</h2>
			</div>
		</div>
	</div>
	<div class="secondLine">
		<div class="block visibility">
			<h2>Visibility</h2>
			<div class="value">
				<h3>6,4</h3>
				<h2>miles</h2>
			</div>
		</div>
		<div class="block air">
			<h2>Air Pressure</h2>
			<div class="value">
				<h3>998</h3>
				<h2>mb</h2>
			</div>
		</div>
	</div>
</div>

<style>
	.today {
		display: flex;
		flex-direction: column;
		max-width: 704px;
		width: auto;
		margin: auto;
		padding: 33px;
		padding-bottom: 100px;
	}

	.firstLine, .secondLine {
		display: flex;
		gap: 48px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.firstLine {
		margin-bottom: 48px;
	}

	.block {
		max-width: calc(328px - 44px);
		width: 328px;
		background-color: #1E213A;
		padding: 22px;
	}

	h1, h2, h3 {
		color: #E7E7EB;
		font-style: normal;
	}

	h1, .block h3 {
		font-weight: 700;
	}

	h1 {
		font-size: 24px;
		line-height: 28px;
		margin-bottom: 32px;
	}

	h2 {
		font-weight: 500;
	}

	.block h2 {
		font-size: 16px;
		line-height: 19px;
		text-align: center;
	}

	.block h3 {
		font-size: 64px;
		line-height: 75.14px;
	}

	.value h2 {
		font-size: 36px;
		line-height: 42.26px;
		margin-top: 20px;
	}

	.value {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
	}
</style>
