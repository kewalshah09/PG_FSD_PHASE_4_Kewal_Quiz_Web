import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What is the longest that an elephant has ever lived?',
      answer: [
        { option: '17 years', correct: false },
        { option: '49 years', correct: false },
        { option: '86 years', correct: true },
        { option: '142 years', correct: false },
      ]
    },
    {
      question: 'How many rings are on the Olympic flag?',
      answer: [
        { option: 'None', correct: false },
        { option: '4', correct: false },
        { option: '5', correct: true },
        { option: '7', correct: false },
      ]
    },
    {
      question: 'What is a tarsier',
      answer: [
        { option: 'A Primate', correct: true },
        { option: 'A Lizard', correct: false },
        { option: 'A Bird', correct: false },
        { option: 'An Animal', correct: false }
      ]
    },
    {
      question: 'How did Spider-Man get his powers',
      answer: [
        { option: 'Military experiment gone wrong', correct: false },
        { option: 'Born with them', correct: false },
        { option: 'Bitten by a radioactive spider', correct: true },
        { option: 'Woke up with them after a strange dream', correct: false }
      ]
    },
    {
      question: ' In darts, what is the most points you can score with a single throw?',
      answer: [
        { option: '20', correct: false },
        { option: '60', correct: true },
        { option: '50', correct: false },
        { option: '100', correct: false }
      ]
    },
    {
      question: 'Which of these animals does NOT appear in the Chinese zodiac?',
      answer: [
        { option: 'Rabbit', correct: false },
        { option: 'Dragon', correct: false },
        { option: 'Bear', correct: true },
        { option: 'Dog', correct: false }
      ]
    },
    {
      question: 'How many holes are on a standard bowling ball?',
      answer: [
        { option: '2', correct: false },
        { option: '5', correct: false },
        { option: '3', correct: true },
        { option: '10', correct: false }
      ]
    },
    {
      question: 'In the nursery rhyme, how many blackbirds were baked in a pie?',
      answer: [
        { option: '4', correct: false },
        { option: '11', correct: false },
        { option: '24', correct: true },
        { option: '99', correct: false },
      ]
    },
    {
      question: 'What is a pomelo?',
      answer: [
        { option: 'An old-fashioned punching bag', correct: false },
        { option: 'A breed of dog ', correct: false },
        { option: 'The largest citrus fruit', correct: true },
        { option: 'A stone', correct: false }
      ]
    },
    {
      question: 'What city is the capital of France?',
      answer: [
        { option: 'Rome', correct: false },
        { option: 'London', correct: false },
        { option: 'Paris', correct: true },
        { option: 'Cairo', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
