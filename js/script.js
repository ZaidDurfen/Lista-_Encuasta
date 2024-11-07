const surveyApp = {
    data() {
        return {
            programmingInterest: '',
            yearsProgramming: null,
            reasonForProgramming: '',
            currentLanguage: '',
            languagesList: [],
            showResults: false
        };
    },
    methods: {
        addLanguage() {
            // Agrega el lenguaje solo si no está vacío y no está duplicado
            if (this.currentLanguage.trim() && !this.languagesList.includes(this.currentLanguage.trim())) {
                this.languagesList.push(this.currentLanguage.trim());
                this.currentLanguage = ''; // Limpiar el campo de entrada
            }
        },
        displayResults() {
            // Mostrar la sección de resultados
            this.showResults = true;
        }
    }
};

// Montar la aplicación en el elemento con id "surveyApp"
Vue.createApp(surveyApp).mount('#surveyApp');
