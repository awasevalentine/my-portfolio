
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessagingService } from 'src/app/core/service/messaging.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  messageStatus: boolean = false;
  loaderIsActive: boolean;

  constructor(private _snackbar: MatSnackBar, private _messagingService: MessagingService) {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.loaderIsActive = true;
    this._messagingService.sendMessage(this.contactForm.value).subscribe(
      (response) => {
        this.loaderIsActive = false;
        this.messageStatus = true;
      this.contactForm.reset();
      },
      (error) => {
        this.loaderIsActive = false;
       /* console.log(error.message);
        this._snackbar.open(`${error.message}`, 'Ok', {

      horizontalPosition: "center",
      verticalPosition: "bottom",
      duration: 5000
    });*/
        
      }
    );

  }

  // note, this would have been done using snackbar, but i just wanted to have fun with this.

  displayMessage() {
    if (this.messageStatus) {
      return "Message Sent!"
    }
    setTimeout(() => {
      this.messageStatus = false;
      return "Unable to send Messsage.";
    },40000);
  }


  // tis method is used for validation error display

  errorMessage(value){
    if (this.contactForm.get(`${value}`).hasError('required') && this.contactForm.get(`${value}`).touched){
      
      return `${value} is required!`;
    }

    if (this.contactForm.get(`${value}`).hasError('email') && this.contactForm.get(`${value}`).touched){
      
      return `A valid ${value} is required!`;
    }
 
  }

}
