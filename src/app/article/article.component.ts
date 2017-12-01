import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {FeedService} from '../shared/service';
import { providerDef } from '@angular/core/src/view/provider';

@Component({

selector:'app-article',
templateUrl:'./article.component.html',
providers:[FeedService]
})

export class ArticleComponent
{
    feeds:any[];
constructor(private router:ActivatedRoute,private feedService:FeedService){

    console.log(router.snapshot.params.id);

    feedService.getSingleArticle(router.snapshot.params.id).subscribe((response:any) => {
        this.feeds = response.article;
        console.log(this.feeds)
    }, error => {
        console.log(error);
    });

}




}