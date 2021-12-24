import Ract from "react";
import { ButtonWrapper, Questions } from "./QuestionCard.styles";

type Props= {
    question?: string;
    answers?: string[];
    callback(e: React.MouseEvent<HTMLButtonElement>): Promise<void>;
    userAnswer?: AnswerObject;
    questionNumber: number;
    totalQuestions: number;
}
export type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
}


const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions })=> (

    <Questions>
        <p className="number">Question: {questionNumber} / {totalQuestions}</p>
        {question&&<p dangerouslySetInnerHTML={{ __html: question }}></p>}
        <div>
            {answers&&answers.map((answer, ind)=> (
                <ButtonWrapper 
                    key={ind}
                    correct={userAnswer?.correctAnswer === answer}
                    userClicked={userAnswer?.answer === answer}
                >
                    <button disabled={!!userAnswer} onClick={callback} value={answer} className="btn">
                        <span dangerouslySetInnerHTML={{__html: answer}}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Questions>
)

export default QuestionCard;