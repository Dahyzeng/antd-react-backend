const logger = store => next => action => {
    console.log('action: ' + action.type + ' begin');
    next(action);
    console.log('action: ' + action.type + ' end');
};

export default logger;