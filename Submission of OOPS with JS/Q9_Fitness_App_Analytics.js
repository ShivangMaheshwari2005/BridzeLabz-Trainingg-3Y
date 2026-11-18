class FitnessAnalytics {
    constructor(data) {
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error("Workout dataset is empty!");
        }

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        const total = this.data.reduce(
            (sum, user) => sum + user.calories,
            0
        );

        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(user =>
            user.user + " walked " + user.steps +
            " steps and burned " + user.calories + " calories."
        );
    }
}

const workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:", fitness.getActiveUsers());
    console.log("Average Calories:", fitness.getAverageCalories());
    console.log("User Summary:", fitness.getUserSummary());
} catch (error) {
    console.log("Error:", error.message);
}
