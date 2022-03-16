import React, { useState, useEffect } from 'react';
import "./App.css";
import { DateOfBirth } from './moment';


export default function App(){

  const [user, setUser] = useState({});
  const [userName, setUserName] = useState('');
  const [userGender, setUserGender] = useState('');
  const [userUserName, setUserUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [lat, setlat] = useState('');
  const [lng, setLng] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  
  async function setDetails() {
    console.log(user);
    setUserName(user.results[0].name.title + " " + user.results[0].name.first + " " + user.results[0].name.last);
    setUserGender(user.results[0].gender);
    setUserUserName(user.results[0].login.username);
    setUserPhone(user.results[0].phone);
    setlat(user.results[0].location.coordinates.latitude);
    setLng(user.results[0].location.coordinates.longitude);
    setAddress(user.results[0].location.street.number + ", " + user.results[0].location.street.name + " street, " + user.results[0].location.city + ", " + user.results[0].location.state + ", " + user.results[0].location.country + ", " + user.results[0].location.postcode);
    console.log(user.results[0].dob);
    setDob(DateOfBirth(user.results[0].dob.date));
  }

  async function getData(){
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
    return data;
  }

  useEffect(() => {
    async function putData() {
      let temp = await getData();
      console.log(temp);
      setUser(temp);
    }
    putData();
  }, []);
  
  useEffect(setDetails, [user]);
  return (
    <div className='App'>
      <div className='App-header'> PROFILE PAGE </div>
      <div className='user-container'>
      <div className='info-item'>Name : {userName}</div>
      <div className='info-item'>Gender : {userGender}</div>
      <div className='info-item'>Username : {userUserName}</div>
      <div className='info-item'>Date of Birth :{dob}</div>
      <div className='info-item'>Phone Number : {userPhone}</div>
      <div className='info-item'>Address : {address}</div>
      </div>
    </div>
  );
}