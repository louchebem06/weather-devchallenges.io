<div class="day">
	<h3 class="title">Tomorrow</h3>
	<img src="/Clear.png" alt="" />
	<div class="temp">
		<p class="maxTemp">16°C</p>
		<p class="minTemp">11°C</p>
	</div>
</div>

<style>
	.day {
		background-color: #1E213A;
		width: 120px;
		height: 177px;
		display: flex;
		flex-direction: column;
	}

	.day img {
		width: 56.44px;
		height: 62px;
		margin: auto;
		display: block;
		margin-top: 10px;
	}

	.temp {
		display: flex;
		justify-content: space-around;
		padding-bottom: 18px;
	}

	.title {
		text-align: center;
		padding-top: 18px;
	}

	.title, .maxTemp {
		color: #E7E7EB;
	}

	.minTemp {
		color: #A09FB1;
	}

	h3, p {
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 19px;
	}
</style>
