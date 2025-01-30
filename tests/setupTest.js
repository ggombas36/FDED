import { setup } from '@nuxt/test-utils';

beforeAll(async () => {
  await setup({
    // Adjust options here if needed
    server: false, // Use this for purely component tests
  });
});