class Weather {
    constructor(city, state) {
        this.apiKey = 'a127552ab245fbff';
        this.city = city;
        this.state = state;
        this.defaultCity = 'Kiev';
        this.defaultState = 'Ukraine';
    }

    //Fetch weather from API

    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();
        return responseData.current_observation;
    }

    // Change weather location

    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}