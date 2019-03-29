import { InterceptResolver, Service, GenericGapiResolversType } from '@gapi/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserType } from '../../user/types/user.type';

@Service()
export class LoggerInterceptor implements InterceptResolver {
    intercept(
        chainable$: Observable<any>,
        context: UserType,
        payload,
        descriptor: GenericGapiResolversType
    ) {
        console.log('Before...');
        const now = Date.now();
        return chainable$.pipe(
            tap(() => console.log(`After... ${Date.now() - now}ms`)),
        );
    }
}