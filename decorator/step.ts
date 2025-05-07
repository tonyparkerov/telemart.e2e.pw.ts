/* eslint-disable @typescript-eslint/no-explicit-any */
import { test } from "@playwright/test";

/**
 * Decorator that wraps a function with a Playwright test step.
 * Used for reporting purposes.
 *
 * @example
 ```
    import { step } from './step_decorator';
    class MyTestClass {
        @step('optional step name')
        async myTestFunction() {
            // Test code goes here
        }
    }
 ```
 */
export function step<This, Args extends any[], Return>(message?: string) {
  return function actualDecorator(
    target: (this: This, ...args: Args) => Promise<Return>,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Promise<Return>
    >
  ) {
    // Skip wrapping if the file is global-setup.ts
    if (context.name === "globalSetup") {
      return target;
    }

    function replacementMethod(this: any, ...args: Args) {
      // Check if we're in a test context by looking at the stack trace
      const isInTest = new Error().stack?.includes("test.step") || false;

      if (!isInTest) {
        // If not in test context, just call the function directly
        return target.call(this, ...args);
      }

      const name =
        message ?? `${this.constructor.name}.${context.name as string}`;

      return test.step(name, async () => target.call(this, ...args), {
        box: true,
      });
    }

    return replacementMethod;
  };
}
