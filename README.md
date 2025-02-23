# Merch-Form-Ishan2659
Below is the summary/info regarding the implementations I was able to carry out during the task:-

1) I validated the form using the function Flag(), in this function I repeatedly called the defError() function to display the error message whenever an input field failed validation. I called the function Flag() using the onsubmit event attribute in form component of html.

For different input fields I used different logics for validation, I also made regex patterns for email, phone number and BITS-ID.

Also for radio-buttons, dropdown menu and checkbox I didn't used the default html attribute "required" as suggested in the task, by using the same Flag() function I made sure that these input fields can't be submitted empty.


2) I styled the form using basic CSS and also made it responsive for all screen sizes using media queries.(the breakdown points for layout are:- 1126px, 767px, 425px, 340px)


3) I made a function storeData() to store the values of form inside local storage. This function stores data only when the form is completely validated and also the uniqueSubmission() function allows it to.


4) The uniqueSubmission() function makes sure that the form can be only submitted with a unique BITS-ID for every user.(the logic it uses is that it checks whether the same bits id is stored already in the local storage with different combination of other input fields)(I didnt used the array approach to store id values as an array as I was not very confident in it)


5) I made a function fillData() to repopulate the form. I called it using the event listener DOMContentLoaded to fill up the form whenever the page is reloaded if local storage contains the input values.


6) Then there are small functions like clearDatauponSubmission() which empties the form once it is successfully submitted and submissionConfirmation() function which displays a message when the form is submitted.


7) In the end I called the storedata function and clearDatauponSubmission function using the eventListener "submit", hence when the form is succesfully submitted both of these functions are called.


8) The form submission confirmation message function was not called within the same eventListener as the storeData and clearDatauponSubmission, I called it as soon as the Flag succesfully validates the form, I used the same defError function to display the confirmation message. 


Thats it!(if there's any error in submission or the code isn't working as mentioned above please lmk!)
