import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
        Powered by <b><a href="http://www.apes-at-work.com/" target="_blank">AAW</a></b>. Theme provides by
        <b><a href="https://akveo.com" target="_blank">Akveo</a></b> @ 2017</span>
    <div class="socials">
      <a href="https://github.com/yuriymarshall" target="_blank" class="ion ion-social-github"></a>
      <!--<a href="https://www.facebook.com/akveo" target="_blank" class="ion ion-social-facebook"></a>-->
      <!--<a href="https://twitter.com/akveo_inc" target="_blank" class="ion ion-social-twitter"></a>-->
      <a href="https://www.linkedin.com/company/2624407/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
