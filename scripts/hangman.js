 class Hangman{
    constructor(word, remainingGuesses){
        this.word = word.toLowerCase().split('')
        this.guessedLetters = []
        this.remainingGuesses = remainingGuesses
        this.status = 'playing'
    }

    calculatedStatus(){
        const finished = this.word.every((letter)=>{
            return this.guessedLetters.includes(letter) || letter === ' '
        })

        // const lettersUnguessed = this.word.filter((letter)=>{
        //     return !this.guessedLetters.includes(letter)
        // })
        // const finished = lettersUnguessed.length === 0



        // let finished = true

        // this.word.forEach((letter)=>{
        //     if(this.guessedLetters.includes(letter)){

        //     }else{
        //         finished = false
        //     }
        // })

        if(this.remainingGuesses === 0){
            this.status = 'failed'
        }else if(finished){
            this.status = 'Finished'
        }else{
            this.status = 'playing'
        }
    }

   get  puzzle(){
        let Guessed = ''
       
        this.word.forEach((element) => {
                if(this.guessedLetters.includes(element) || element === ' '){
                    Guessed += element
                }else{
                    Guessed += '*'
                }
        
        })
        return Guessed
    }

    get statusMessage(){
        if(this.status === 'playing'){
            return `Guesses left: ${this.remainingGuesses}`
        }else if(this.status === 'failed'){
            return `Nice try! The word was "${this.word.join('')}"`
        }else{
            return 'Great Work! You Guessed the work'
        }
    }


    makeGuess(guess){
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if(this.status !== 'playing'){
            return 
        }
    
    
        if(isUnique){
            this.guessedLetters.push(guess)
        }
    
        if(isUnique && isBadGuess){
            this.remainingGuesses --
        }
        this.calculatedStatus()
    }
}
 
 
 
 




