let outputText = '';
let trackHistory = [];

const handleCommand = (command) => {
    const [action, text] = command.split(' ');
    const length = parseInt(text) ?? 0;
    switch (action) {
        case 'INSERT':
            if (text) {
                outputText += text;
            }
            trackHistory.push(outputText);
            break;
        case 'DELETE':
                if (length > outputText.length) {
                    outputText = '';
                } else {
                    outputText = outputText.slice(0, outputText.length - length)
                }
                trackHistory.push(outputText);
                break;
        case 'UNDO':
            trackHistory.pop();
            break;
    }
    
}


const handleChainOfCommands = (chainOfCommands = []) => {
    if (!chainOfCommands.length === 0) return '';

    chainOfCommands.forEach(command => {
        handleCommand(command);
    });

    return trackHistory.pop();
}


console.log(handleChainOfCommands(['INSERT hello', 'INSERT world', 'DELETE 3', 'UNDO']));  // helloworld