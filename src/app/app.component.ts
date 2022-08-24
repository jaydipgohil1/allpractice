import { Component, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allpractice';
  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) { }
  async lzlocoadminlist() {
    this.vcr.clear();
    const { AdminlistLzLoComComponent } = await import('./adminlist-lz-lo-com/adminlist-lz-lo-com.component')
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(AdminlistLzLoComComponent)
    )

  }
  async lzlocouserslist() {
    this.vcr.clear();
    const { UserslistLzLoComComponent } = await import('./userslist-lz-lo-com/userslist-lz-lo-com.component');
    this.vcr.createComponent(
      this.cfr.resolveComponentFactory(UserslistLzLoComComponent)
    )

  }
}
