import { Headers } from '@angular/http';

export function commonHttpHeaders () {
    const HEADERS = new Headers();
    HEADERS.append('Content-Type', 'application/json; charset=utf-8');
    return { HEADERS };
}