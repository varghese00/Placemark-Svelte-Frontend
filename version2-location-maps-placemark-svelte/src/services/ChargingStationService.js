import axios from "axios";
import { trusted } from "svelte/internal";
import {user} from "../stores.js";
// import {decodeToken} from "../utils/jwt.js"



export class ChargingStationService {
    // baseUrl="http://localhost:3000";

    constructor(baseUrl){
        console.log("HELLO");
        this.baseUrl="http://localhost:4000";
        console.log(this.baseUrl);
        const chargingStationCredentials= localStorage.chargingstation;
        if (chargingStationCredentials){
            const savedUser= JSON.parse(chargingStationCredentials);
            user.set({
                email:savedUser.email,
                token:savedUser.token,
                // userId: decodeToken(savedUser.token).userId,

            
            });
            axios.defaults.headers.common["Authorization"]="Bearer" + savedUser.token;
        }
    }


    async login(email, password) {
        try {
          const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
          if (response.data.success) {
            user.set({
              email: email,
              token: response.data.token,
            //   userId: decodeToken(response.data.token).userId,

            });
            localStorage.chargingstation = JSON.stringify({email:email, token:response.data.token});
            return true;
          }
          return false;
        } catch (error) {
          return false;
        }
      }


      async logout() {
        user.set({
          email: "",
          token: "",
        //   userId:"",
        });
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("chargingstation");
      }



      async signup(firstName, lastName, email, password) {
        try {
          const userDetails = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          };
          await axios.post(this.baseUrl + "/api/users", userDetails);
        //   alert(userDetails);
          return true;
        } catch (error) {
          return false;
        }
      }

      async addStation(station) {
          try{
            const res = await axios.post(this.baseUrl + "/api/stations", station);
            return res.data;
          }
          catch (error) {
              alert(error);
            return false;
          }
      }

      async getAllStations(){
          try
          {
          const response=await axios.get(this.baseUrl + "/api/stations");
          // alert("Get all stations request left front end already")
          return response.data;
        }

          catch(error)
          {return false;}
      }

      async getStation(id) {
        const res = await axios.get(`${this.baseUrl}/api/stations/${id}`);
        return res.data;
      }



      async getUserStations() {
          try{
        const response = await axios.get(this.baseUrl + "/api/stations/userStations");
        console.log("Svelte is trying to get user stations")
        return response.data;
          }
          catch(error)
          {
            console.log("Svelte couldnt get user stations")

              alert(error)
              return false;
            }

      }

      async deleteStation(id) {
        const response = await axios.delete(`${this.baseUrl}/api/stations/${id}`);
        return response;
      }

      async deleteAllStations() {
        const response = await axios.delete(`${this.baseUrl}/api/stations`);
        return response.data;
      }



      async createLocation(stationid, location) {
        try{
        location.stationid = stationid;
        alert("location being forwarded from front end service to backend")
        const res = await axios.post(`${this.baseUrl}/api/stations/${stationid}/locations`, location);
        alert("location forwarded from front end service to backend ia added")
        return res.data;
      }catch (error) {
        return false;
      }
      } 


      async getLocation(id) {
        try {
          const res = await axios.get(`${this.baseUrl}/api/locations/${id}`);
          return res.data;
        } catch (error) {
          console.log("no such id");
          return null;
        }
      }


      async getAllLocations() {
        try{
          const res = await axios.get(`${this.baseUrl}/api/locations`);
          return res.data;
        }catch (error) {
          return [];
        }

      }

      async deleteLocation(id) {
        try {
          await axios.delete(`${this.baseUrl}/api/locations/${id}`);
        } catch (error) {
          console.log("location is not deleted at front end");
        }
      }

      async getLocationsByStationId(stationid) {
        try{
          const response = await axios.get(this.baseUrl + "/api/stations/"+stationid+"/locations");
          // alert("location by station id is retreived at front end api")
          console.log("location by station id is retreived at front end")
          return response.data;
        }
        catch(error){
          // alert("location by station id not retreived at frontend at service api level")
          console.log("location by station id not retreived at frontend")
        }

      }

      async updateLocation(stationid, locationid, updatedLocation) {
        try {
          const response = await axios.post(
            this.baseUrl + "/api/stations/" + stationid + "/locations/" + locationid,
            updatedLocation
          );
          // alert("Updated location gone to the backend")
          return response.data;
        } catch (error) {
          // alert("Updated location not gone to the backend")
          return error;
        }
      }


      async deleteAllLocations() {
        const res = await axios.delete(`${this.baseUrl}/api/locations`);
        return res.data;
      }


      async getUser(id) {
        const res = await axios.get(`${this.baseUrl}/api/users/${id}`);
        return res.data;
      }

      async deleteUser(id) { 
        try{
        const res = await axios.delete(`${this.baseUrl}/api/users/deleteuser/${id}`);
        return true;
      } 
      catch (error) 
      {
          console.log(error);
          return false;
      }
    }

      async getLoggedInUser() {
          const loggedInUser = await axios.get(this.baseUrl + "/api/users/loggedInUser");
          return loggedInUser;
  
      }


      async getAllUsers() {
        try{
          // alert("user info fetch is leaving front end")
          const res = await axios.get(`${this.baseUrl}/api/users`);
          // alert("user info fetch succesfully forwarded to backend")
          return res.data;
        }catch(error){
          return [];
        }

      }


      async deleteAllUsers() {
        const res = await axios.delete(`${this.baseUrl}/api/users`);
        return res.data;
      }

      async updateUserDetails(userid,user) {
          const response = await axios.post(this.baseUrl + "/api/users/updateUser/" + userid,user);
          return response;
      }


    async addImage(locationid, imageFile) {
      alert("Going to send the image to the  back end")
        const response = await axios.post(`${this.baseUrl}/api/locations/${locationid}/uploadImage`, imageFile);
        alert("successfully sent the image to back end and response is received")
        return response.data
    }

async getAnalytics(){
  const response=await axios.get(this.baseUrl + "/api/analytics");
  return response.data;
}



}