import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] //tells how to construct service
})
export class NewAccountComponent {
  constructor(private loggingService: LoggingService, private accountsService: AccountsService)
  //creates a property and binds it;
  //add a type assignment for class that needs to be injected
   {
    this.accountsService.subscribe((status:string) => alert('New Status: ' + status));
    //alert is a popup. subscribe shows how to create an alert?
  }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }
}
