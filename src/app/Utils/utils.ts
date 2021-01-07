export class Utils {

    static getAverageFromValues(values: number[]): number {
        let sum = values.reduce(function (sum, value) {
            return sum + value;
        }, 0);

        return sum / values.length;
    }

    static getStandardDeviation(values: number[]): number {
        let mean = this.getAverageFromValues(values);
        return Math.sqrt(values.map(val => Math.pow(val - mean, 2)).reduce((a, b) => a + b) / values.length)
    }
}