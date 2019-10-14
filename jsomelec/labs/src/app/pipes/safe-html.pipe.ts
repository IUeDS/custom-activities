import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safeHtml'})

export class SafeHtmlPipe implements PipeTransform {
	constructor(private _sanitizer: DomSanitizer) {}

	transform(htmlValue: string) {
		let sanitizedHtml;
		sanitizedHtml = this._sanitizer.bypassSecurityTrustHtml(htmlValue);
		return sanitizedHtml;
	}
}