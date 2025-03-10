import { sendQuery } from './copilotChat';
import { sendMessage } from './api';

jest.mock('./api');

describe('sendQuery', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should not send the query if the message length is too long', async () => {
    const longMessage = 'a'.repeat(1001);
    await sendQuery(longMessage);
    expect(sendMessage).not.toHaveBeenCalled();
  });

  it('should send the query if the message length is within the limit', async () => {
    const shortMessage = 'a'.repeat(1000);
    await sendQuery(shortMessage);
    expect(sendMessage).toHaveBeenCalledWith(shortMessage);
  });

  it('should retry sending the query if it fails due to message length', async () => {
    const shortMessage = 'a'.repeat(1000);
    (sendMessage as jest.Mock).mockRejectedValueOnce(new Error('message is too long'));
    await sendQuery(shortMessage);
    expect(sendMessage).toHaveBeenCalledTimes(2);
  });

  it('should log an error message if the query fails', async () => {
    const shortMessage = 'a'.repeat(1000);
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    (sendMessage as jest.Mock).mockRejectedValueOnce(new Error('some error'));
    await sendQuery(shortMessage);
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error sending message:', expect.any(Error));
    consoleErrorSpy.mockRestore();
  });
});
