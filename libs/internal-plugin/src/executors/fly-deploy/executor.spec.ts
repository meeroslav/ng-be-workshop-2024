import { ExecutorContext } from '@nx/devkit';

import { FlyDeployExecutorSchema } from './schema';
import executor from './executor';

const options: FlyDeployExecutorSchema = { distLocation: 'dist/apps/myapp', flyAppName: 'myapp' };
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
  projectGraph: {
    nodes: {},
    dependencies: {},
  },
  projectsConfigurations: {
    projects: {},
    version: 2,
  },
  nxJsonConfiguration: {},
};

describe('FlyDeploy Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(false);
  });
});
