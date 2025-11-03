const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            colorInput: '',
            paragraphIsVisible: true,
            // storedInput: [],
            // storedColor: [],
        }
    },
    computed: {
            paraClasses(){
                return {
                    user1: this.userInput === 'user1',
                    user2: this.userInput === 'user2',
                    visible: this.paragraphIsVisible,
                    hidden: !this.paragraphIsVisible,
                }
            },
            // visibleStyle(){
            //     return this.paragraphIsVisible ? 'visible' : 'hidden'
            // }
    },
    methods: {
        setInput(){
            this.userInput = this.$refs.userText.value
        },

        toggleParagraph(){
            this.paragraphIsVisible = !this.paragraphIsVisible;
        },

        // userInputComputed() {
        //     this.storedInput = this.userInput;
        // },
        // userColorInput(){
        //     this.storedColor = this.colorInput
        // }
        
    }
})

app.mount('#assignment');