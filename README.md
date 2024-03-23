"# TECHPLEMENT-Fitness-Tracker-Backend" 

Fitness Tracker Backend
Signup Api :- http://localhost:5000/api/auth/signup    
Input
{
    "name":"shivam",
    "email":"shivamm00210@gmail.com",
    "mobile":"9981392889",
    "password":"12345"
}

Output
{
    "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ZmU3OWY1MjU1NzBhMDFjODM3ZGMyOCJ9LCJpYXQiOjE3MTExNzYzMTV9.MRES6dQQeB9bfEZUwqDI2ggPPvrOYGmAYXt02c6LGTE",
    "success": true
}


Login Api :- http://localhost:5000/api/auth/login
{
    "email":"shivamm0021@gmail.com",
    "password":"12345"
}

{
    "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY1ZmU3OWY1MjU1NzBhMDFjODM3ZGMyOCJ9LCJpYXQiOjE3MTExNzYzMTV9.MRES6dQQeB9bfEZUwqDI2ggPPvrOYGmAYXt02c6LGTE",
    "success": true
}

