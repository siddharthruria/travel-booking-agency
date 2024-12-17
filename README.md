
# Travel Booking Agency Project
A simple full stack web application which helps you to create bookings for tour packages. This project is intended to be the first assessment task for The Inceptioners.

## Badges
[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB)


## Features

- **Tour Packages**: Browse through many tour packages and book a vacation you like. <br />
- **Invoice Generation**: Book the package by filling in your details and get your invoice. <br />
- **Admin Panel**: Are you the admin? Login and manage the entire website!.


## Install the project in your local machine

- To run this project locally, follow these steps to configure your environment variables:

1. Clone the repo:
   ```bash
   git clone https://github.com/siddharthruria/travel-booking-agency.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd travel-booking-agency
   ```
   
3. Create a .env file here
   ```bash
   touch .env
   ```
   
4. Add the following variables to your .env file: Open the .env file in your preferred text editor and add the following:
   ```bash
   MONGO_URI=your_mongo_database_connection_string   
   PORT=your_desired_port_number
   ```
- Replace 'your_mongo_database_connection_string' with your MongoDB connection URI.<br />
- Replace 'your_desired_port_number' with a port number for your server.<br />


### a. Running the project

- After you have successfully set up the environment variables in the .env file, follow the below mentioned instructions.
1. Make sure you're in the main project root folder [ travel-booking-agency ]: 

2. Now navigate to the server (backend) folder and install dependancies:
   ```bash
   cd server
   npm i
   ```

3. Run the express server now:
   ```bash
   nodemon index.js
   ```
   
4. Now navigate to client (frontend) folder and install dependancies:
   ```bash
   cd ../client
   npm i
   ```

5. Add the following variables to your .env file in the client folder: Open the .env file in your preferred text editor and add the following:
   ```bash
   REACT_APP_ADMIN_USERNAME=your_admin_username
   REACT_APP_ADMIN_PASSWORD=your_admin_password
   ```
  - Replace 'your_admin_username' with your desired username for the admin.<br />
  - Replace 'your_admin_password' with your desired password for the admin.<br />


5. Run the React client here:
   ```bash
   npm run start
   ```
   
### b. Direct Website Link
https://travel-agency-client-t39l.onrender.com/


## API Reference

### 1. Admin related routes

#### Create New Package

```http
  POST /api/admin/package/create
```


#### Update details of a package

```http
  PUT /api/admin/package/{id}
```



#### Delete a package

```http
  DELETE /api/admin/package/{id}
```

### 2. Booking related routes

#### Create Booking for a Package

```http
  POST /api/booking/
```


#### Get all the Bookings

```http
  GET /api/booking/yourBookings
```



#### Get a specific Booking by id

```http
  GET /api/booking/{id}
```

#### Get Invoice for a Booking

```http
  GET /api/booking/invoice/{id}
```

### 3. Package related routes

#### Get all the available Packages

```http
  GET /api/package/all
```


#### Get a specific Package by id

```http
  GET /api/package/{:id}
```

## Feedback

If you have any feedback, please reach out to me at siddharthruria10@gmail.com

Thank You.
## 🔗 Connect with Me
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ruria-siddharth/)
[![X](https://img.shields.io/badge/X-%23000000.svg?style=for-the-badge&logo=X&logoColor=white)](https://x.com/ruriaxcodes)
