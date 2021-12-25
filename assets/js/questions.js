var questions = [];

function question(question, answer, iAnswer1, iAnswer2, iAnswer3){
    this.question = question;
    this.answer = answer;
    this.iAnswer1 = iAnswer1;
    this.iAnswer2 = iAnswer2;
    this.iAnswer3 = iAnswer3;
}

questions.push(
    question(
        'Inside which HTML element do we put the JavaScript?',
        '<script>',
        'javascript',
        '<js>',
        '<scripting>'
    )
)
questions.push(
    question(
        'How do you write "Hello World" in an alert box?',
        'alert("Hello World");',
        'msgBox("Hello World");',
        'alertBox("Hello World");',
        'msg("Hello World");'
    )
)
questions.push(
    question(
        'How do you create a function in JavaScript?',
        'function myFunction()',
        'function:myFunction()',
        'function = myFunction()',
        'function{ myFunction() }'
    )
)
questions.push(
    question(
        'How do you call a function named "myFunction"?',
        'myFunction()',
        'call myFunction()',
        'call function myFunction()',
        'myFunction.call()'
    )
)
questions.push(
    question(
        'How to write an IF statement in JavaScript?',
        'if (i == 5)',
        'if i == 5 then',
        'if i = 5',
        'if i = 5 then'
    )
)
questions.push(
    question(
        'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        'if (i != 5)',
        'if i <> 5',
        'if i =! 5 then',
        'if (i <> 5)'
    )
)