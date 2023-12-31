import { Observable, throwError, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export interface RetryParams {
  maxAttempts?: number;
  scalingDuration?: number;
  shouldRetry?: ({ status }) => boolean;
}

const defaultParams: RetryParams = {
  maxAttempts: 3,
  scalingDuration: 1000,
  shouldRetry: ({ status }) => status >= 400
}

export const GenericRetryStrategy = (params: RetryParams = {}) => (attempts: Observable<any>) => attempts.pipe(
  mergeMap((error, i) => {
    const { maxAttempts, scalingDuration, shouldRetry } = { ...defaultParams, ...params }
    const retryAttempt = i + 1;
    // if maximum number of retries have been met
    // or response is a status code we don't wish to retry, throw error
    if (retryAttempt > maxAttempts || !shouldRetry(error)) {
      return throwError(error);
    }
    console.log(`Attempt ${retryAttempt}: retrying in ${retryAttempt * scalingDuration}ms`);
    // retry after 1s, 2s, etc...
    return timer(retryAttempt * scalingDuration);
  })
);
