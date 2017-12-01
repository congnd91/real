import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http/src/static_response';

@Injectable()

export class FeedService
{
constructor (private http:Http)
{


}
getFeed():Observable<any[]>{
return this.http.get('https://conduit.productionready.io/api/articles/')
.map((response: Response) => response.json());


}
getSingleArticle(id:string):Observable<any[]>
{
    return this.http.get('https://conduit.productionready.io/api/articles/'+id)
    .map((response: Response) => response.json());
    
}

    
}

