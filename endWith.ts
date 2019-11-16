let message;
message = 'SOURAV';
// @ts-ignore
let endWith = (<string>message).endsWith('Roy');
let endAnother = (message as string).concat('SOU');