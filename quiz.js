import { read_file } from './file_reader.js';

async function start_quiz() {
    const questions = await read_file();

    try {
        if(!questions || questions.length == 0) {
            console.error("Invalid quiz question found!");
            return;
        }
    
        questions.array.forEach((qs, index) => {
            console.log(`Question ${index+1} : ${qs.question}`);
    
            if (qs.type === 'Multiple-Choice') {
                console.log('Options: \n', qs.options.join('\n'));
            } else if(qs.type === 'True-False') {
                console.log('Options: \n', qs.options.join('\n'));
            }
    
            setTimeout(() => {
                console.log("Time's Up");
                console.log(`The correct answer is ${qs.correct_answer}`)
            }, 20000);
        });
    } catch (error) {
        console.error(error);
    }
}

start_quiz();