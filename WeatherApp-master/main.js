let weatherApp = new Vue({
    el: '#app',
    data: {
        currentTemp: '',
        minTemp: '',
        maxTemp: '',
        sunrise: '',
        sunset: '',
        pressure: '',
        humidity: '',
        wind: '',
        overcast: '',
        icon: ''
    },
    methods: {
        getWeather() {
            let url = "http://api.openweathermap.org/data/2.5/weather?q=Homel&units=metric&APPID=3ebed86941d68989b6ce17862385a269";
			    axios
                .get(url)
                .then(response => {
                    this.currentTemp = response.data.main.temp;
                    this.minTemp = response.data.main.temp_min;
                    this.maxTemp = response.data.main.temp_max;
                    this.pressure = response.data.main.pressure;
                    this.humidity = response.data.main.humidity + '%';
                    this.wind = response.data.wind.speed + 'm/s';
                    this.overcast = response.data.weather[0].description;
                    this.sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
                    this.sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    beforeMount() {
        this.getWeather();
    },
});