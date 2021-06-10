import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CorsProxyInterceptor } from './cors-proxy.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: CorsProxyInterceptor, multi: true },
];
