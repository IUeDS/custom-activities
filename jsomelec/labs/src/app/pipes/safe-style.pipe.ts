import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeStyle'
})
export class SafeStylePipe implements PipeTransform {

  constructor(private _sanitizer: DomSanitizer) {}

  transform(styleValue: string) {
    let sanitizedStyle;
	sanitizedStyle = this._sanitizer.bypassSecurityTrustStyle(styleValue);
	return sanitizedStyle;
  }

}
