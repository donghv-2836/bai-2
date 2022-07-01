const vue = Vue.createApp({
    data() {
        return {
            courseGoal: 'Finish the course and learn Vue',
            link: 'vuejs.org',
            textRandom: '',
        };
    },
    methods: {
    	randomText() {
            this.textRandom = Math.random() >= 0.5 ? "Learn PHP" : "Learn VueJs";
    	}
    }
});

vue.mount('#user-goal');
