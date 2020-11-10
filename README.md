# citasbackend
## ACTIVE ROUTES
POST:
https://citasbackend.herokuapp.com/api/client/login  

This endpoint expects in the body:  
email and  password   

POST:  
https://citasbackend.herokuapp.com/api/client/register  

This endpoint expects in the body:  
name, email, password and a phone  

POST:  
https://citasbackend.herokuapp.com/api/client/logout  
This endpoint expects in the header an auth-token field with your login token.  

POST:  
https://citasbackend.herokuapp.com/api/client/createAppointment  
This endpoint expects in the header an auth-token field with your login token.  
GET:
https://citasbackend.herokuapp.com/api/client/activeAppointment  
This endpoint expects in the header an auth-token field with your login token.  

GET:
https://citasbackend.herokuapp.com/api/client/allAppointments  
This endpoint expects in the header an auth-token field with your login token.  

GET:
https://citasbackend.herokuapp.com/api/client/getAvailableAppointmentsByDate  
This endpoint expects in the header an auth-token field with your login token. 
 
PATCH:
https://citasbackend.herokuapp.com/api/client/modifyActiveAppointment  
This endpoint expects in the header an auth-token field with your login token.  
It also expects the following fileds in the body: date (yyyy-mm-dd), time (hh-mm) and description  

PATCH:
https://citasbackend.herokuapp.com/api/client/cancelActiveAppointment  
This endpoint expects in the header an auth-token field with your login token.
