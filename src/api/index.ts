import { shuffleArray } from "../utils";
export enum DifficultyEnum {
        EASY = "easy",
        MEDIUM = "medium",
        HARD = "hard"
}
export type Question = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

export type QuestionState = Question&{
    answers: string[]
}

export const fetchQuestions = async (amount: number, difficulty: DifficultyEnum): Promise<QuestionState[]|null>=> {
    try {
        const endpoint: string = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
        const { results } = await (await fetch(endpoint)).json();
        return results.map((res: Question)=> ({
            ...res,
            answers: shuffleArray<string>([...res.incorrect_answers, res.correct_answer])
        }));

    }catch (err) {
        return null;
    }
}
