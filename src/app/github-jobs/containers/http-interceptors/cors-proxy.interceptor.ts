import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CorsProxyInterceptor implements HttpInterceptor {
  readonly CORS_PROXY_URL = 'https://api.allorigins.win/get?url=';

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const CORSReq = request.clone({
      url: this.CORS_PROXY_URL + request.url
    });
    return next.handle(CORSReq).pipe(
      map(event => this.parseCORSResponse(event)));
  }

  private parseCORSResponse(event: HttpEvent<any>): HttpEvent<any> {
    if (event instanceof HttpResponse) {
      return event.clone({ body: JSON.parse(event.body.contents) });
    } else {
      return event;
    }
  }
}
