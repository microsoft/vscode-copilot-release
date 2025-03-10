import { sendMessage } from './api';

const MAX_MESSAGE_LENGTH = 1000;

async function sendQuery(query: string) {
  if (query.length > MAX_MESSAGE_LENGTH) {
    console.error('Message is too long. Please try a shorter question.');
    return;
  }

  try {
    await sendMessage(query);
  } catch (error) {
    console.error('Error sending message:', error);
    if (error.message.includes('message is too long')) {
      console.log('Retrying with the same query...');
      await sendMessage(query);
    }
  }
}

export { sendQuery };
