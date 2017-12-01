
import {Component} from '@angular/core';
import { SharedModule,HeaderComponent,FooterComponent,FeedService
} from '../shared';
import { Observable } from 'rxjs/Observable';

@Component ({

selector:'home-page',
templateUrl:'./home.component.html',
providers:[FeedService]


})
export class HomeComponent
{
    feeds:any[];
constructor( private feedService:FeedService){
console.log(feedService.getFeed());
 feedService.getFeed().subscribe((response:any) => {
    this.feeds = response.articles;
    console.log(this.feeds)
}, error => {
    console.log(error);
}
)


}

}