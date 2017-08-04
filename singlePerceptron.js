class Perceptron {
	constructor() {
		network = this;
		this.bias = 1;
		this. = [];
		this.learnRate = 0.15;
		this.interactions = 1000;
	}
	
	sigmoid(x) {
		return (1 / (1 - Math.exp(-1 * x)));
	}
	
	init(learnRate, interactions) {
		network.learnRate = learnRate;
		network.interactions = interactions;
	}
	
	initWeights(num) {
		bias = parseInt(Math.random() * 10);
		
		for(let i = 0; i < num; i++) {
			network.weights[i] = parseInt(Math.random() * 10);
		}
	}
	
	train(data) {
		network.initWeights(data[0].inputs.length);
		let interation = 0, error = true;
		while(error && interaction < network.interactions) {
			error = false;
			let difference = 0;
			
			for(let i = 0; i < data.length; i++) {
				let result = network.run(data[i].inputs);
				if(result != data[i].output) {
					error = true;
					difference = data[i].output - result;
					network.recalcWeights(difference, data[i].inputs);
				} else {
					error = false;
				}
			}
			
			console.log(`Interaction: ${interaction} - Error: ${diference.toFixed(12)}`);
			interaction++;
		}
	}
	
	recalcWeights(val, inputs) {
		for(let j = 0; j < network.weights.length; j++) {
			network.weights[j] += network.learnRate * val * inputs[j];
		}
	}
	
	run(inputs) {
		let sum = 0;
		for(let j = 0; j < inputs.length; j++) {
			sum += inputs[j] * network.weights[j];
		}
		sum += network.bias;
		return network.signmoid(sum);
	}
}
