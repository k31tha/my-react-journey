// renamed so not to use
export default {
    get: jest.fn(() => Promise.resolve({ data: [{}] }) ),
    default: jest.fn(() => Promise.resolve({ data: {} }) )
  };